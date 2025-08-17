const Class = require("../models/Class");


const getAllClassesController = async (req, res) => {
    try {
        const allClasses = await Class.find({});
        return res.status(200).send({ message: 'All Class data', data: allClasses });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const getClassByIdController = async (req, res) => {
    try {
        const id = req.params.id
        const classData = await Class.findById(id);
        return res.status(200).send({ message: 'Class data', data: classData });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const createClassController = async (req, res) => {
    try {
        const { className, year } = req.body;
        if (!className || !year) {
            return res.status(400).send({ message: 'Please Provide Class Name & Year' });
        }
        const myClass = new Class({ className, year });
        await myClass.save();

        return res.status(201).send({ message: 'Class Created', data: myClass });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

const updateClassController = async (req, res) => {
    try {
        const { className, year, classTeacher = [], } = req.body;
        const classId = req.params.classId

        if (!Array.isArray(classTeacher)) {
            return res.status(404).send({ message: 'classTeacher must be an array of string (_id of user)' });
        }

        // const classData = await Class.findById(classId);
        // if(!classData){
        //     return res.status(404).send({ message: 'Class Not Found' });
        // }

        // const updatedClass = await Class.updateOne({ className, year, classTeacher }, { _id: classId })
        const updatedClass = await Class.findByIdAndUpdate(
            classId,
            { className, year, classTeacher, },
            { new: true, }
        );

        return res.status(200).send({ message: "Class Updated", data: updatedClass });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}

// 200 success
// 201 create
// 400 bad req
// 404 not found
// 500 server error

const deleteClassController = async (req, res) => {
    try {
        const classId = req.params.id;
        const del = await Class.findByIdAndDelete(classId);

        return res.send({ message: 'Class Deleted!' });
    } catch (error) {
        return res.status(500).send({ message: error.message });
    }
}


module.exports = {
    getAllClassesController,
    createClassController,
    updateClassController,
    deleteClassController,
    getClassByIdController,
}

// CREATE, READ, UPDATE, DELETE