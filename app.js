const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3333;
require("dotenv/config");

const postsRoute = require("./routes/posts");
const categoryRoute = require("./routes/categorys");
const bodyParser = require("body-parser");
const cors = require("cors");

app.use(bodyParser.json());
app.use("/posts", postsRoute);
app.use("/categories", categoryRoute);

app.use(cors());
app.use(function (req, res, next) {
  res.header(
    "Access-Control-Allow-Origin",
    "http://localhost:3000, https://unboxx.vercel.app"
  );
  res.header("Access-Control-Allow-Methods", "DELETE, PUT, GET, POST");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/", (req, res) => {
  res.send("We are on home!");
});

mongoose
  .connect(process.env.DB_CONNECTION, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to DB"))
  .catch((e) => console.log(e));

app.listen(process.env.PORT || port, () => console.log(`the port is ${port}`));
