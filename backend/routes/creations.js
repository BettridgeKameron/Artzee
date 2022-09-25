const { response } = require('express')
const express = require('express')
const Creation = require('../models/CreationModel')
const { getCreations, getCreation, createCreation, deleteCreation, updateCreation } = require('../controllers/creationController')

const router = express.Router()

// Get all creations
router.get('/', getCreations)

// Get a single creation
router.get('/:id', getCreation)

// Post a new creation
router.post('/', createCreation)

// Delete a creation
router.delete('/:id', deleteCreation)

// Update a creation
router.patch('/:id', updateCreation)

module.exports = router