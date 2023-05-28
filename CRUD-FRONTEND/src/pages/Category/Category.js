import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import { api } from "../../utils/constants";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`${api}/category/getCategory`);
        let result = await response.json();
        if (result) setCategory(result.data);
      } catch (error) {
        toast.error("Error while loading the data...", {
          hideProgressBar: true,
          autoClose: 2000,
        });
      }
    };
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${api}/category/deleteCategory/${id}`);
      window.location.reload();
    } catch (error) {
      toast.error("Error while deleting...", {
        hideProgressBar: true,
        autoClose: 2000,
      });
    }
  };

  return (
    <>
      <Navbar />
      <h2 style={{ textAlign: "center", alignContent: "center" }}>
        Category Table
      </h2>

      <div
        className="container "
        style={{ textAlign: "center", alignContent: "center" }}
      >
        <center>
          <table style={{ borderCollapse: "collapse", width: "60%" }}>
            <thead>
              <tr style={{ border: "1px solid black", padding: "8px" }}>
                <th style={{ padding: "10px", textAlign: "center" }}>
                  <h3>
                    <b>CatregoryId</b>
                  </h3>
                </th>
                <th style={{ padding: "10px", textAlign: "center" }}>
                  <h3>
                    <b>CatregoryName</b>
                  </h3>
                </th>
                <th style={{ padding: "10px", textAlign: "center" }}>
                  <h3>
                    <b>Action</b>
                  </h3>
                </th>
              </tr>
            </thead>
            {category &&
              category.length > 0 &&
              category.map((category) => {
                return (
                  <tbody key={category.CategoryId}>
                    <tr style={{ border: "1px solid black", padding: "8px" }}>
                      <td>
                        <h5 style={{ textAlign: "center" }}>
                          {category.CategoryId}
                        </h5>
                      </td>
                      <td>
                        <h5 style={{ textAlign: "center" }}>
                          {category.CategoryName}
                        </h5>
                      </td>
                      {console.log(category)}
                      <td>
                        <NavLink to={`/updateCategory/${category.CategoryId}`}>
                          <Button variant="primary" style={{ margin: "10px" }}>
                            Edit
                          </Button>
                        </NavLink>
                        <NavLink>
                          <Button
                            variant="primary"
                            onClick={() => handleDelete(category.CategoryId)}
                            style={{ margin: "10px" }}
                          >
                            Delete
                          </Button>
                        </NavLink>
                      </td>
                    </tr>
                  </tbody>
                );
              })}
          </table>
        </center>
      </div>
      <footer style={{ alignItems: "center", textAlign: "center" }}>
        <NavLink to="/addCategory">
          <Button variant="primary" style={{ margin: "10px" }}>
            Add Category
          </Button>
        </NavLink>
      </footer>
    </>
  );
};

export default Category;
