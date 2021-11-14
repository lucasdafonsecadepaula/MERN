const mongoose = require("../server.js");

const Place = mongoose.model("Place", {
  name: String,
  photo: String,
  description: String,
  coordinates: { latitude: String, longitude: String },
});

module.exports = Place;
