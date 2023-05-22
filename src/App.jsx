import React from "react";
import Menu from "./components/Menu";
import ScrollTop from "./components/ScrollTop";
import { Outlet } from "react-router";
import { NavLink } from "react-router-dom";
import { ReactComponent as Logo } from "./assets/logo.svg";

function App() {
  return (
    <>
      <ScrollTop />
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
    </>
  );
}

export default App;
