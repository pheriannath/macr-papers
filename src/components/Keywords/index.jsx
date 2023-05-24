import React from "react";
import { KEYWORD_MAP } from "../../data/keywords";
import { NavLink } from "react-router-dom";

const Keywords = () => {
  return (
    <div>
      <h2>Keywords</h2>
      <ul>
        {KEYWORD_MAP.map((k, i) => (
          <li key={i}>
            <NavLink to={`/keywords/${k.id}`}>{k.name}</NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Keywords;
