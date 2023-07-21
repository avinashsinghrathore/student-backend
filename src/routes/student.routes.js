const express = require("express");
const studentController = require("../controller/student.controller");

const router = express.Router();

router
  .post('/', studentController.createStudentDetails)
  .get('/', studentController.getAllStudentDetails)
  .get('/:id', studentController.getStudentDetails)
  .put('/:id', studentController.replaceStudentDetails)
  .patch('/:id', studentController.updateStudentDetails)
  .delete('/:id', studentController.deleteStudentDetails);

exports.router = router;
