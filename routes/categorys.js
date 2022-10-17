const express = require("express");

const Category = require("../models/Category");
const router = express.Router();

router.get("/", async (req, res) => {
  try {
    const categories = await Category.find();
    res.json(categories);
  } catch (err) {
    res.json(err);
  }
});
router.post("/", async (req, res) => {
    const categories = new Category({
        categoryName: req.body.categoryName,
        categoryImage: req.body.categoryImage
    });
  try {
    const saveCategories = await categories.save();
    res.json(saveCategories);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
