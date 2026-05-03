const { User } = require('../models');

// CREATE
exports.createUser = async (req, res) => {
  const user = await User.create(req.body);
  res.json(user);
};

// GET ALL
exports.getUsers = async (req, res) => {
  const users = await User.findAll();
  res.json(users);
};