const User = require("../models/User");
const jwt = require("jsonwebtoken");
const transporter = require("../modules/mailer");

async function forgotPassword(req, res) {
  const { email } = req.body;

  try {
    const user = await User.findOne({ email });

    if (!user) return res.status(200).send({ error: "User not found" });

    const token = generateToken({ id: user.id });

    await User.findByIdAndUpdate(user.id, {
      $set: { passwordResetToken: token },
    });

    transporter.sendMail({
      text: `http://localhost:3000/forgot_password/pass?token=${token}`,
      subject: "Password Reset",
      from: "vidadonthave@gmail.com",
      to: email,
    });

    res.send({ok: token});
  } catch (err) {
    console.log(err);
    res.status(400).send({ error: "Erro on forgot password. Try again" });
  }
}

module.exports = { forgotPassword };

function generateToken(params = {}) {
  return jwt.sign(params, process.env.HASH_SECRET, {
    expiresIn: 900,
  });
}
