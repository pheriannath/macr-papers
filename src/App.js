import React from "react";
import Menu from "./components/Menu";
import { Outlet } from "react-router";
import { ReactComponent as Logo } from "./assets/logo.svg";

function App() {
  return (
    <div>
      <h1 style={{ width: "150px" }}>
        <Logo />
      </h1>
      <Menu />
      <Outlet />
    </div>
  );
}

export default App;
