import React from "react";
import Button from "react-bootstrap/Button";
import Navbar from "../NavBar/Navbar";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <>
      <Navbar />
      <div
        className="container"
        style={{
          width: "80%",
          textAlign: "center",
          alignItems: "center",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <NavLink to={"/products"}>
          <Button variant="primary" style={{ width: "100%", margin: "20px" }}>
            Product
          </Button>
        </NavLink>
        <NavLink to={"/categories"}>
          <Button
            variant="primary"
            style={{ width: "100%", marginLeft: "20px", marginRight: "20px" }}
          >
            Category
          </Button>
        </NavLink>
      </div>
    </>
  );
};

export default Home;
