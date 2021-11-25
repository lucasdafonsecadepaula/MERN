const User = require("../models/User");
const generateToken = require("./generateToken.js")

const registerUser = async (req, res) => {
  const { email } = req.body;

  console.log(req.body)

  try {
    if (await User.findOne({ email }))
      return res.status(200).send({ error: "Usuario já cadastrado" });

    const user = await User.create(req.body);

    const token = generateToken({id: user.id});
    
    // user.password = undefined;
    return res.send({ user, token });
  } catch (err) {
    return res.status(400).send({ error: "Registration failed" });
  }
};

module.exports = { registerUser };
