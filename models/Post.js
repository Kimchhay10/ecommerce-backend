const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  profileUrl: {
    type: String,
    required: true,
  },
  profileName: {
    type: String,
    required: true,
  },
  price: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
  imageUrl: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("Posts", PostSchema);
