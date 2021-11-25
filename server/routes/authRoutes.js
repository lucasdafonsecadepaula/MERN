const express = require("express");
const authMiddleware = require("../middlewares/auth");
const { registerUser } = require("../controllers/registerUser.js");
const { signInUser } = require("../controllers/signInUser.js");
const { forgotPassword } = require("../controllers/forgotPassword.js");
const { verifyToken } = require("../controllers/verifyToken.js");

const router = express.Router();

router.post("/signin", signInUser);
router.post("/register", registerUser);
router.post("/forgot_password", forgotPassword);
router.post("/forgot_password_verify_token", verifyToken);

router.use(authMiddleware);
router.get("/verifytoken", (req, res) => {
  res.send({ ok: true, user: req.userId });
});

module.exports = router;
