import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../NavBar/Navbar";
import Form from "react-bootstrap/Form";
import { useNavigate, useParams } from "react-router-dom";
import { api } from "../../utils/constants";
import { toast } from "react-toastify";

const AddCategory = () => {
  const [CategoryId, setCategoryId] = useState("");
  const [CategoryName, setCategoryName] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  useEffect(() => {
    const fetchData = async () => {
      let response = await fetch(
        `${api}/category/getSingleCategory/${params.id}`
      );
      const result = await response.json();
      setCategoryId(result.data[0].CategoryId);
      setCategoryName(result.data[0].CategoryName);
    };
    fetchData();
  }, [params.id]);

  const handleAddCategory = async (e) => {
    e.preventDefault();

    try {
      let response = await fetch(
        `${api}/category/updateCategory/${params.id}`,
        {
          method: "PUT",
          body: JSON.stringify({ CategoryId, CategoryName }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      response = await response.json();
      if (response) navigate("/categories");
    } catch (error) {
      toast.error("Failed to add category. Please try again.", {
        hideProgressBar: true,
        autoClose: 2000,
      });
    }
  };
  return (
    <>
      <Navbar />
      <div className="container">
        <h1>Update Category</h1>
        <Form onSubmit={handleAddCategory}>
          <Form.Group className="mb-3" controlId="CategoryId">
            <Form.Label>Category Id</Form.Label>
            <Form.Control
              type="number"
              name="CategoryId"
              placeholder="Enter Category Id"
              onChange={(e) => setCategoryId(e.target.value)}
              value={CategoryId}
              disabled
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="CategoryName">
            <Form.Label>Category Name</Form.Label>
            <Form.Control
              type="text"
              name="CategoryName"
              placeholder="Enter Category Name"
              onChange={(e) => setCategoryName(e.target.value)}
              value={CategoryName}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Update Category
          </Button>
        </Form>
      </div>
    </>
  );
};

export default AddCategory;
