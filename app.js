const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = 3333
require("dotenv/config");

const postsRoute = require("./routes/posts");
const categoryRoute = require("./routes/categorys");
const bodyParser = require("body-parser");


app.use(bodyParser.json());
app.use("/posts", postsRoute);
app.use("/categories", categoryRoute);
const cors = require("cors");
app.use(cors({
  origin: '*'
}))
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
