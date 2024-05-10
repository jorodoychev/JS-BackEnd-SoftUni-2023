const Course = require('../models/Course.js')

exports.create = (courseData) => {
    return Course.create(courseData)
}

exports.getAll = () => Course.find()

exports.getSingle = (courseId) => {
    return Course.findById(courseId)
}

exports.delete = (courseId) => Course.findByIdAndDelete(courseId)

exports.update = (courseId, course) => {
    const updatedCourse = Course.findByIdAndUpdate(courseId, course, {
        new: true,
        runValidators: true,
    })
    return updatedCourse
}

exports.signUp = async (courseId, user) => {
    try {
        const course = await Course.findById(courseId)
        course.signUpList.push(user)
        return course.save()
    } catch (e) {
        throw new Error(e)
    }
}

