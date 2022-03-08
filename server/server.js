const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("API is Running");
});

app.listen(3001, console.log("Server Started on Port 3001"));
