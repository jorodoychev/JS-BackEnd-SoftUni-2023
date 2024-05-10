const mongoose = require('mongoose')

const courseSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, 'Title is required!'],
        minLength: [5, 'Title must be at least 5 characters long'],
    },
    type: {
        type: String,
        required: [true, 'Type is required!'],
        minLength: [3, 'Type must be at least 3 characters long'],
    },
    certificate: {
        type: String,
        required: [true, 'Certificate is required!'],
        minLength: [2, 'Certificate must be at least 2 characters long'],
    },
    image: {
        type: String,
        required: [true, 'Image is required!'],
        match: [/^(http|https):\/\//, 'Invalid URL'],
    },
    description: {
        type: String,
        required: [true, 'Description is required!'],
        minLength: [10, 'Description must be at least 10 characters long'],
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],
        minLength: [2, 'Price must be at least 2 characters long'],
        match: [/^\d+(\.\d+)?$/, 'Only positive numbers'],
    },
    signUpList: [
        {
            user: {
                type: mongoose.Types.ObjectId,
                required: true,
            },
        },
    ],
    owner: {
        type: mongoose.Types.ObjectId,
        ref: 'User',
    },
})

const Course = mongoose.model('Course', courseSchema)

module.exports = Course
