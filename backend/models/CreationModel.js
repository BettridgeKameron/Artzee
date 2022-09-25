const mongoose = require('mongoose')

const Schema = mongoose.Schema

const creationSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    likes: {
        type: Number,
        default: 0,
        required: true
    },
    tags: {
        type: [String],
        default: ['']
    },
    replies: {
        type: [String],
        default: ['']
    }
}, { timestamps: true })

module.exports = mongoose.model('Creation', creationSchema)