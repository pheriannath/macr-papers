import React from "react";
import { NavLink } from "react-router-dom";
import { PUBLICATIONS } from "../../publications";

const Menu = () => {
  return (
    <ul className="main-menu">
      {PUBLICATIONS.map((pub, i) => {
        return (
          <li className="main-menu__item" key={i}>
            <NavLink to={`publication/${pub.id}`}>{pub.author}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
