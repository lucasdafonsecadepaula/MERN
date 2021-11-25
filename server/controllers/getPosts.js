const User = require("../models/User");
const Place = require("../models/Place");

const getPosts = async (req, res) => {
  try {
    const places = await Place.find();

    res.status(200).json(places);
  } catch (err) {}
};

module.exports = { getPosts };
