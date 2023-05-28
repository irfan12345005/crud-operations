const db = require("../database/db");

const getCategory = (req, res, next) => {
  try {
    const query = "SELECT * FROM categories;";
    db.query(query, (err, data) => {
      if (err) return res.json({ success: false, message: err.message });
      return res.status(200).json({ success: true, data: data });
    });
  } catch (error) {
    return next(error);
  }
};

const createCategory = (req, res, next) => {
  try {
    const { CategoryId, CategoryName } = req.body;
    const insertCategory = `INSERT INTO categories (CategoryId,CategoryName) VALUES (${CategoryId},"${CategoryName}")`;
    console.log(insertCategory);
    db.query(insertCategory, (err, data) => {
      if (err)
        return res.status(400).json({ success: false, message: err.message });
      return res.status(200).json({
        success: true,
        message: "Category Created Successfully!!",
        data: data,
      });
    });
  } catch (error) {
    return next(error);
  }
};

const updateCategory = (req, res, next) => {
  try {
    const { CategoryName } = req.body;
    const id = req.params.id;
    const updateCategory = `UPDATE categories SET CategoryName = "${CategoryName}" WHERE CategoryId = ${id}`;
    db.query(updateCategory, (err, data) => {
      if (err)
        return res.status(400).json({ success: false, message: err.message });
      return res
        .status(200)
        .json({ success: true, message: "Category Updated Successfully!!" });
    });
  } catch (error) {
    return next(error);
  }
};

const deleteCategory = (req, res, next) => {
  try {
    const id = req.params.id;
    const deleteCategory = `delete FROM categories where CategoryId = ${id}`;
    db.query(deleteCategory, (err, data) => {
      if (err)
        return res.status(400).json({ success: false, message: err.message });
      return res
        .status(200)
        .json({ success: true, message: "Category Deleted Successfully!!" });
    });
  } catch (error) {
    return next(error);
  }
};

const singleCategory = (req, res, next) => {
  try {
    const id = req.params.id;
    const queryForSingleCategory = `SELECT * FROM categories WHERE CategoryId = ${id}`;
    db.query(queryForSingleCategory, (err, data) => {
      if (err)
        return res.status(400).json({ success: false, message: err.message });
      return res.status(200).json({ success: true, data: data });
    });
  } catch (error) {
    return next(error);
  }
};

module.exports = {
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
  singleCategory,
};
