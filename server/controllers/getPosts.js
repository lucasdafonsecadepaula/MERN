const User = require("../models/User");
const Place = require("../models/Place");

const getPosts = async (req, res) => {
  try {
    const users = await Place.find();

    res.status(200).json(users);
  } catch (err) {}
};

module.exports = { getPosts };
