import React, { useState, useEffect } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Navbar from "../NavBar/Navbar";
import { toast } from "react-toastify";
import { api } from "../../utils/constants";
import { useNavigate, useParams } from "react-router-dom";

const UpdateProduct = () => {
  const [ProductName, setProductId] = useState("");
  const [CategoryName, setCategoryName] = useState("");
  const [CategoryId, setCategoryId] = useState("");

  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        `${api}/product/getSingleProduct/${params.id}`
      );
      let result = await response.json();
      setProductId(result.data[0].ProductName);
      setCategoryName(result.data[0].CategoryName);
      setCategoryId(result.data[0].CategoryId);
    };
    fetchData();
  }, [params.id]);
  const handleUpdateProduct = async (e) => {
    e.preventDefault();
    try {
      let response = await fetch(`${api}/product/updateProduct/${params.id}`, {
        method: "PUT",
        body: JSON.stringify({ ProductName, CategoryName, CategoryId }),
        headers: {
          "Content-Type": "application/json",
        },
      });
      response = await response.json();
      if (response) navigate("/products");
    } catch (error) {
      toast.error("Failed to add product. Please try again", {
        hideProgressBar: true,
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Update Product</h1>
        <Form onSubmit={handleUpdateProduct}>
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
              disabled
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

export default UpdateProduct;
