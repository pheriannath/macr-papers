import React from "react";
import { Outlet, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { PUBLICATIONS } from "../../publications";

const Publication = () => {
  const { pubId } = useParams();
  const publication = PUBLICATIONS?.find((pub) => pub.id === pubId);
  const articles = publication?.articles;

  return (
    <div>
      <h2>{publication.name}</h2>
      <ul>
        {articles?.map((a, i) => {
          return (
            <li key={i}>
              <NavLink to={`${a.id}`}>{a.name}</NavLink>
            </li>
          );
        })}
      </ul>
      <Outlet />
    </div>
  );
};

export default Publication;
