import React, { useEffect } from "react";
import { Outlet, useParams } from "react-router";
import { NavLink } from "react-router-dom";
import { PUBLICATIONS } from "../../publications";

const Publication = () => {
  const { pubId } = useParams();
  const publication = PUBLICATIONS?.find((pub) => pub.id === pubId);
  const articles = publication?.articles;

  useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty("--highlight", publication?.accent);
  }, [publication]);

  return (
    <div className="pubgrid">
      <div>
        <h2>{publication?.name}</h2>
        <ul>
          {articles?.map((a, i) => {
            return (
              <li key={i}>
                <NavLink to={`${a.id}`}>
                  {a.order} {a.title}
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default Publication;
