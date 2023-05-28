import React from "react";
import Router from "./Router";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

const App = () => {
  return (
    <div className="App" style={{ width: "100vw", height: "100vh" }}>
      <Router />
    </div>
  );
};

export default App;
