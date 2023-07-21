const fs = require("fs");
const model = require("../model/student.model");
const Student = model.Student;

// Create
exports.createStudentDetails = async (req, res) => {
  try {
    const doc = new Student(req.body);
    await doc.save();
    console.log(doc);
    res.status(201).json(doc);
  } catch (error) {
    console.log(error);
    req.status(400).json(error);
  }
};

// Read - all - find - method
exports.getAllStudentDetails = async (req, res) => {
  try {
    const doc = await Student.find();
    console.log(doc);
    res.status(200).json(doc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// read - findById - method
exports.getStudentDetails = async(req, res) => {
  const id = req.params.id
  try {
    const doc = await Student.findById(id)
    console.log(doc)
    res.status(200).json(doc)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

// Update - findOneAndReplace - put - method
exports.replaceStudentDetails = async(req, res) => {
  const id = req.params.id
  try {
    const updatedDetails = await Student.findOneAndReplace({_id:id},req.body,{new:true})
    res.status(201).json(doc)
  } catch (error) {
    console.log(error)
    res.status(400).json(error)
  }
}

// update - findOneAndUpdate - patch - method
exports.updateStudentDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const updateDetail = await Student.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(updateDetail);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// Delete method
exports.deleteStudentDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await Student.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
