import React, { useEffect, useState } from "react";
import Navbar from "../NavBar/Navbar";
import { api } from "../../utils/constants";
import { NavLink } from "react-router-dom";
import { Button } from "react-bootstrap";
import axios from "axios";
import { toast } from "react-toastify";

const Product = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${api}/product/getProduct`)
      .then((response) => response.json())
      .then((result) => {
        setProducts(result.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`${api}/product/deleteProduct/${id}`);
      window.location.reload();
    } catch (error) {
      toast.error(error);
    }
  };
  return (
    <>
      <Navbar />
      <div
        className="container "
        style={{ textAlign: "center", alignContent: "center" }}
      >
        <center>
          <table style={{ borderCollapse: "collapse", width: "80%" }}>
            <thead>
              <tr style={{ border: "1px solid black", padding: "8px" }}>
                <th style={{ padding: "10px", textAlign: "center" }}>
                  <h3>
                    <b>ProductId</b>
                  </h3>
                </th>
                <th style={{ padding: "10px", textAlign: "center" }}>
                  <h3>
                    <b>ProductName</b>
                  </h3>
                </th>
                <th style={{ padding: "10px", textAlign: "center" }}>
                  <h3>
                    <b>CatregoryName</b>
                  </h3>
                </th>
                <th style={{ padding: "10px", textAlign: "center" }}>
                  <h3>
                    <b>CatregoryId</b>
                  </h3>
                </th>
                <th style={{ padding: "10px", textAlign: "center" }}>
                  <h3>
                    <b>Action</b>
                  </h3>
                </th>
              </tr>
            </thead>
            {products &&
              products.length > 0 &&
              products.map((product) => {
                return (
                  <tbody key={product.ProductId}>
                    <tr style={{ border: "1px solid black", padding: "8px" }}>
                      <td>
                        <h5 style={{ textAlign: "center" }}>
                          {product.ProductId}
                        </h5>
                      </td>
                      <td>
                        <h5 style={{ textAlign: "center" }}>
                          {product.ProductName}
                        </h5>
                      </td>
                      <td>
                        <h5 style={{ textAlign: "center" }}>
                          {product.CategoryName}
                        </h5>
                      </td>
                      <td>
                        <h5 style={{ textAlign: "center" }}>
                          {product.CategoryId}
                        </h5>
                      </td>
                      <td>
                        <NavLink to={`/updateProduct/${product.ProductId}`}>
                          <Button variant="primary" style={{ margin: "10px" }}>
                            Edit
                          </Button>
                        </NavLink>
                        <NavLink>
                          <Button
                            variant="primary"
                            onClick={() => handleDelete(product.ProductId)}
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
        <NavLink to="/addProduct">
          <Button variant="primary" style={{ margin: "10px" }}>
            Add Product
          </Button>
        </NavLink>
      </footer>
    </>
  );
};

export default Product;
