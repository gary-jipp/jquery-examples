const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT = 8080;
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

// Define an endpoint
app.post("/api/form", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  // console.log(req.body);
  return res.end(JSON.stringify(req.body));
});

// Start listening for requests
app.listen(PORT, () => {
  console.log("Running on port", PORT);
});
