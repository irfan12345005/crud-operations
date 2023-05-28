const router = require("express").Router();

const {
  getProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  singleProduct,
  Product,
} = require("../controllers/product");

router.get("/getProduct", getProduct);
router.post("/createProduct", createProduct);
router.put("/updateProduct/:id", updateProduct);
router.delete("/deleteProduct/:id", deleteProduct);
router.get("/getSingleProduct/:id", singleProduct);
router.get("/Product", Product);

module.exports = router;     
