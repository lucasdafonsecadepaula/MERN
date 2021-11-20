const express = require("express");
const authMiddleware = require("../middlewares/auth");
const { registerUser } = require("../controllers/authController.js");
const { signInUser } = require("../controllers/signInUser.js");

const router = express.Router();

router.post("/auth/register", registerUser);
router.post("/auth/authenticate", signInUser);
router.use(authMiddleware);
router.get("/auth/projects", (req, res) => {
  res.send({ ok: true, user: req.userId });
});

module.exports = router;
