import React from "react";
import { NavLink } from "react-router-dom";
import { PUBLICATIONS } from "../../publications";

const Menu = () => {
  return (
    <ul>
      {PUBLICATIONS.map((pub, i) => {
        return (
          <li key={i}>
            <NavLink to={`publication/${pub.id}`}>{pub.author}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
