const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const helmet = require("helmet");
const morgan = require("morgan");
const multer = require("multer");

const router = express.Router();
const path = require("path");

const postRoute = require("./routes/posts");

dotenv.config();

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan("common"));

app.get('/api', (req, res) => res.send('Its working!'));

app.use("/api/posts", postRoute);

app.listen(8800, () => {
  console.log("Backend server is running!");
});
