//IMPORTS
require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
module.exports = mongoose;
const io = require("socket.io");
const bodyParser = require("body-parser");
const cors = require("cors");

const getPlaces = require("./routes/getPlaces")
const postRoutes = require("./routes/posts");

//DEFINDO A PORTA
const PORT = process.env.PORT || 8000;

//SETING MONGO DB CONECTION
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASSWORD;
const DB_CONNECTION_URL = `mongodb+srv://${dbUser}:${dbPassword}@cluster0.c23jz.mongodb.net/DB?retryWrites=true&w=majority`;

//MONGO DB MODELS
const User = require("./models/User");

//INICIALIZANDO EXPRESS
const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//POST
app.use("/places", getPlaces);
app.use("/", postRoutes);

mongoose
  .connect(DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {});
  })
  .catch((err) => console.log(err));


 
