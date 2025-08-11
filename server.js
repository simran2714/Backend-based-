const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/contact", (req, res) => {
  console.log(req.body); // frontend se jo data aayega yaha milega
  res.json({ message: "Form data received successfully!" });
});

app.listen(5000, () => console.log("Server running on port 5000"));