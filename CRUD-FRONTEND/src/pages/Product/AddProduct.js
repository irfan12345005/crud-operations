import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "../NavBar/Navbar";
import { toast } from "react-toastify";
import axios from "axios";
import { api } from "../../utils/constants";
import { useNavigate } from "react-router-dom";

const AddProduct = () => {
  const [ProductName, setProductId] = useState("");
  const [CategoryName, setCategoryName] = useState("");
  const [CategoryId, setCategoryId] = useState("");

  const navigate = useNavigate();

  const handleAddProduct = async (e) => {
    e.preventDefault();
    if (ProductName === "" || CategoryName === "" || CategoryId === "") {
      toast.warn("Please Enter All The Details!!", {
        hideProgressBar: true,
        autoClose: 2000,
      });
      return;
    }
    try {
      await axios.post(`${api}/product/createProduct`, {
        ProductName,
        CategoryName,
        CategoryId,
      });
      navigate("/products");
    } catch (error) {
      toast.error("Failed to add category. Please try again", {
        hideProgressBar: true,
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Add Product</h1>
        <Form onSubmit={handleAddProduct}>
          <Form.Group className="mb-3" controlId="productName">
            <Form.Label>Product Name</Form.Label>
            <Form.Control
              name="productName"
              placeholder="Enter Product Name"
              type="text"
              autoCapitalize="false"
              autoComplete="false"
              autoCorrect="false"
              onChange={(e) => setProductId(e.target.value)}
              value={ProductName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="categoryName">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              name="categoryName"
              placeholder="Enter Category Name"
              type="text"
              autoCapitalize="false"
              autoComplete="false"
              autoCorrect="false"
              onChange={(e) => setCategoryName(e.target.value)}
              value={CategoryName}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="categoryId">
            <Form.Label>Category Id</Form.Label>
            <Form.Control
              name="categoryId"
              placeholder="Enter Category Id"
              type="number"
              autoCapitalize="false"
              autoComplete="false"
              autoCorrect="false"
              onChange={(e) => setCategoryId(e.target.value)}
              value={CategoryId}
            />
          </Form.Group>

          <Button variant="success" type="submit">
            Add Product
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddProduct;
