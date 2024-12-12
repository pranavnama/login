const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();


app.use(cors());
app.use(express.json());


mongoose.connect("mongodb://127.0.0.1:27017/imageDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});


const imageSchema = new mongoose.Schema({
  name: String,
  url: String,
});
const Image = mongoose.model("Image", imageSchema);


app.get("/images", async (req, res) => {
  try {
    const images = await Image.find();
    res.json(images);
  } catch (err) {
    res.status(500).send(err.message);
  }
});


app.listen(5001, () => {
  console.log("Server running on http://localhost:5001");
});
