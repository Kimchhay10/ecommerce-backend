const express = require("express");
//we can call it as Collection
const Post = require("../models/Post");
const path = require("path")
const router = express.Router();

const multer = require("multer")
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'Images')
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.now() + path.extname(file.originalname))
  }
})
const upload = multer({storage: storage})



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
    const post = await Post.findById(req.params.slugId);
    res.json(post);
  } catch (err) {
    res.json({ message: err });
  }
});

//insert data
router.post("/", upload.single('image'), async (req, res) => {
  const post = new Post({
    slugId: req.body.title.replace(/\s+/g, ""),
    profileUrl: req.body.profileUrl,
    profileName: req.body.profileName,
    title: req.body.title,
    price: req.body.price,
    imageUrl: req.body.imageUrl,
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
