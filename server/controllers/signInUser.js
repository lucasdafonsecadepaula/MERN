require("dotenv").config();
const User = require("../models/User");
const bcrypt = require("bcrypt");
const generateToken = require("./generateToken.js")

const signInUser = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email }).select("+password");

  if (!user) return res.status(200).send({ error: "User not found" });

  if (!(await bcrypt.compare(password, user.password)))
    return res.status(200).send({ error: "Invalid Password" });

  user.password = undefined;

  const token = generateToken({id: user.id});

  res.send({ user, token });
};

module.exports = { signInUser };
