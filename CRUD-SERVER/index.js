require("dotenv").config();
const express = require("express");
const cors = require("cors");

// routes...
const product = require("./routes/product");
const category = require("./routes/category");

// setting up server...
const app = express();
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  // connection();
  console.log(`server is listening at http:localhost://${PORT}`);
});

// for browser data...
app.use(express.json());
app.use(cors({ origin: ["http://localhost:3000"], credentials: true }));

// setting routes...
app.use("/api/product", product);
app.use("/api/category", category);

// setting middleware...
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something Went Wrong!!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage.toString(),
  });
});
