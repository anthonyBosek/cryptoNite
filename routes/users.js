const express = require("express");
const { getUser } = require("../controllers/users.js");
const { verifyToken } = require("../middleware/auth.js");

const router = express.Router();

// READ ROUTES
router.get("/:id", verifyToken, getUser);

// UPDATE ROUTES

module.exports = router;
