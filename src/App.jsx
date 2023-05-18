import React from "react";
import Menu from "./components/Menu";
import Home from "./components/Home";
import Keywords from "./components/Keywords";
import Bios from "./components/Bios";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "./assets/logo.svg";

function App() {
  return (
    <div className="grid">
      <div>
        <NavLink to="/" style={{ display: "block", width: "150px" }}>
          <Logo />
        </NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/keywords">Keywords</NavLink>
        <NavLink to="/bios">Bios</NavLink>
        <Menu />
      </div>
      <Outlet />
    </div>
  );
}

export default App;
