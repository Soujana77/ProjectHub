const express = require("express");
const router = express.Router();

const {
  createProject,
} = require("../controllers/project.controller");

router.post("/", createProject);

module.exports = router;