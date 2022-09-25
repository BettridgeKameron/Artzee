const Creation = require('../models/CreationModel')
const mongoose = require('mongoose')

// Get all creations
const getCreations = async (req, res) => {
    const creations = await Creation.find({}).sort({ createdAt: -1 })
    res.status(200).json(creations)
}

// Get a single creation
const getCreation = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such creation' })
    }
    const creation = await Creation.findById(id)
    if (!creation) {
        return res.status(404).json({ error: 'No such creation' })
    }
    res.status(200).json(creation)
}

// Make a creation
const createCreation = async (req, res) => {
    const { title, content, likes, tags, replies } = req.body

    let emptyFields = []

    if (!title) {
        emptyFields.push('title')
    }
    if (!content) {
        emptyFields.push('content')
    }
    if (emptyFields.length > 0) {
        return res.status(400).json({ error: 'Please fill in all the fields', emptyFields })
    }

    try {
        const creation = await Creation.create({ title, content, likes, tags, replies })
        res.status(200).json(creation)
    } catch (err) {
        res.status(400).json({ error: err.message })
    }
}

// Delete a creation
const deleteCreation = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such creation' })
    }
    const creation = await Creation.findOneAndDelete({ _id: id })

    if (!creation) {
        return res.status(404).json({ error: 'No such creation' })
    }
    res.status(200).json(creation)
}

// Update a creation
const updateCreation = async (req, res) => {
    const { id } = req.params
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({ error: 'No such creation' })
    }

    const creation = await Creation.findOneAndUpdate({ _id: id }, {
        ...req.body
    })
    if (!creation) {
        return res.status(404).json({ error: 'No such creation' })
    }
    res.status(200).json(creation)
}

module.exports = {
    getCreations,
    getCreation,
    createCreation,
    deleteCreation,
    updateCreation
}