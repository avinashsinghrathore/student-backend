const express = require("express");
const userController = require("../controller/user.controller");

const router = express.Router();

router
  .post('/', userController.createUserDetails)
  .get('/', userController.getAllUserDetails)
  .get('/:id', userController.getUserDetails)
  .put('/:id', userController.replaceUserDetails)
  .patch('/:id', userController.updateUserDetails)
  .delete('/:id', userController.deleteUserDetails);

exports.router = router;
