const router = require("express").Router();

const {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  singleCategory,
} = require("../controllers/category");

router.get("/getCategory", getCategory);
router.post("/createCategory", createCategory);
router.put("/updateCategory/:id", updateCategory);
router.delete("/deleteCategory/:id", deleteCategory);
router.get("/getSingleCategory/:id", singleCategory);

module.exports = router;
