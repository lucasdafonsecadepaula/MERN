const express = require("express");
const authMiddleware = require("../middlewares/auth");
const { getPosts } = require("../controllers/posts.js");
const { registerUser } = require("../controllers/authController.js");
const { signInUser } = require("../controllers/signInUser.js");

const router = express.Router();

router.get("/", getPosts);
router.post("/register", registerUser);
router.post("/authenticate", signInUser);



router.use(authMiddleware);
router.get("/projects", (req, res) => {
  res.send({ ok: true, user: req.userId });
});

module.exports = router;
