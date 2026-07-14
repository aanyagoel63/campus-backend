console.log("db.js loaded");

const mysql = require("mysql2");
const express = require("express");
const cors = require("cors");
const db = require("./db");

const app = express();

app.use(cors());
app.use(express.json());

// ==============================
// Home Route
// ==============================
app.get("/", (req, res) => {
  res.send("🚀 CampusVerse Backend is Running Successfully!");
});

// ==============================
// GET All Events
// ==============================
app.get("/events", (req, res) => {

  const sql = "SELECT * FROM events";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });

});

// ==============================
// GET All Clubs
// ==============================
app.get("/clubs", (req, res) => {

  const sql = "SELECT * FROM clubs";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });

});

// ==============================
// GET All Gallery
// ==============================
app.get("/gallery", (req, res) => {

  const sql = "SELECT * FROM gallery";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });

});

// ==============================
// GET All Notices
// ==============================
app.get("/notices", (req, res) => {

  const sql = "SELECT * FROM notices";

  db.query(sql, (err, result) => {

    if (err) {
      return res.status(500).json(err);
    }

    res.json(result);

  });

});

// ==============================
// POST Contact
// ==============================
app.post("/contact", (req, res) => {

  const { name, email, subject, message } = req.body;

  const sql =
    "INSERT INTO contact (name, email, subject, message) VALUES (?, ?, ?, ?)";

  db.query(sql, [name, email, subject, message], (err, result) => {

    if (err) {
      console.log(err);

      return res.status(500).json({
        success: false,
        message: "Database Error"
      });
    }

    res.json({
      success: true,
      message: "Message Sent Successfully!"
    });

  });

});

// ==============================
// Start Server
// ==============================
// ==============================
// Start Server
// ==============================
console.log("Reached app.listen");

const PORT = 5001;

app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
