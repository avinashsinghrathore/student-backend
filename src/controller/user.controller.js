const fs = require("fs");
const model = require("../model/user.model");
const User = model.User;

// Create
exports.createUserDetails = async (req, res) => {
  try {
    const doc = new User(req.body);
    await doc.save();
    console.log(doc);
    res.status(201).json(doc);
  } catch (error) {
    console.log(error);
    req.status(400).json(error);
  }
};

// Read - all - find - method
exports.getAllUserDetails = async (req, res) => {
  try {
    const doc = await User.find();
    console.log(doc);
    res.status(200).json(doc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// read - findById - method
exports.getUserDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await User.findById(id);
    console.log(doc);
    res.status(200).json(doc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// Update - findOneAndReplace - put - method
exports.replaceUserDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const updatedDetails = await User.findOneAndReplace({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(doc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};

// update - findOneAndUpdate - patch - method
exports.updateUserDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const updateDetail = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(201).json(updateDetail);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);gwssvxwwssxh
  }
};

// Delete method
exports.deleteUserDetails = async (req, res) => {
  const id = req.params.id;
  try {
    const doc = await User.findOneAndDelete({ _id: id });
    res.status(201).json(doc);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
};
