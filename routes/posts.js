const express = require("express");
//we can call it as Collection
const Post = require("../models/Post");

const router = express.Router();

//get general data
router.get("/", async (req, res) => {
  try {
    const posts = await Post.find();
    res.json(posts);
  } catch (err) {
    res.json(err);
  }
});

//get data by unigue id
router.get("/:postId", async (req, res) => {
  try {
    const post = await Post.findById(req.params.postId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//insert data
router.post("/", async (req, res) => {
  const post = new Post({
    profileUrl: req.params.profileUrl,
    profileName: req.body.profileName,
    title: req.body.title,
    price: req.body.price,
    imageUrl: req.body.imageUrl
  });
  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err.message });
  }
});

//delete data
router.delete("/:postId", async (req, res) => {
  try {
    const removePost = await Post.remove({ _id: req.params.postId });
    res.json(removePost);
  } catch (err) {
    message: err;
  }
});

//update data
router.patch("/:postId", async (req, res) => {
  try {
    const updatedPost = await Post.updateOne(
      { _id: req.params.postId },
      { $set: { title: req.body.title, description: req.body.description } }
    );
    res.json(updatedPost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
