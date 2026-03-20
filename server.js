const express = require("express");
const path = require("path");

const app = express();
const PORT = 3000;

// to read form data
app.use(express.urlencoded({ extended: true }));

// serve index.html
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

// variable to store the user's name
let userName = "";

// handle POST request from form
app.post("/submit", (req, res) => {
  userName = req.body.name;
  res.redirect("/greeting");
});

// GET route for redirected page
app.get("/greeting", (req, res) => {
  res.send(`
    <h1>Hello, ${userName}!</h1>
    <a href="/">Go Back</a>
  `);
});

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});