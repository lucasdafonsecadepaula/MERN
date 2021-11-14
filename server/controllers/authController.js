const User = require("../models/User");
const generateToken = require("./generateToken.js")

const registerUser = async (req, res) => {
  const { email } = req.body;

  try {
    if (await User.findOne({ email }))
      return res.status(400).send({ error: "Usuario já cadastrado" });

    const user = await User.create(req.body);

    user.password = undefined;

    const token = generateToken({id: user.id});

    return res.send({ user, token });
  } catch (err) {
    return res.status(400).send({ error: "Registration failed" });
  }
};

module.exports = { registerUser };
