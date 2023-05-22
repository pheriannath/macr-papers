import React from "react";
import { NavLink } from "react-router-dom";
import { PUBLICATIONS } from "../../publications";

const Menu = () => {
  return (
    <ul className="main-menu">
      {PUBLICATIONS.map((pub, i) => {
        return (
          <li
            className="main-menu__item"
            key={i}
            style={{ backgroundColor: pub.accent }}
          >
            <NavLink to={`${pub.id}/${pub.firstArticle}`}>{pub.author}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

export default Menu;
