// Day 3 skeleton routes


const express = require("express");
const router = express.Router();

// POST /api/problems → add problem
router.post("/", (req, res) => {
  res.send("Add problem route working");
});

// GET /api/problems → get all problems for user
router.get("/", (req, res) => {
  res.send("Get all problems route working");
});

// PATCH /api/problems/:id → update status
router.patch("/:id", (req, res) => {
  res.send("Update problem status route working");
});

// DELETE /api/problems/:id → delete problem
router.delete("/:id", (req, res) => {
  res.send("Delete problem route working");
});

module.exports = router;
