const User = require("../models/User");
const generateToken = require("./generateToken.js");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();

const verifyToken = async (req, res) => {
  const { token, password } = req.body;

  try {
    const id = jwt.verify(token, process.env.HASH_SECRET, (err, decoded) => {
      if (err) return res.status(401).send({ error: "Token invalid" });
      return decoded.id;
    });

    const hash = await bcrypt.hash(password, 10);

    await User.findByIdAndUpdate(id, { password: hash });

    res.send({ ok: true });
  } catch (err) {
    return res.status(400).send({ error: "Registration failed" });
  }
};

module.exports = { verifyToken };
