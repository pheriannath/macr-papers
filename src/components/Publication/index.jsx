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
        <h2 className="publication-title">{publication?.name}</h2>
        <ul className="publication-menu">
          {articles?.map((a, i) => {
            return (
              <li className="publication-menu__item" key={i}>
                <NavLink to={`${a.id}`}>
                  <div className="publication-order">
                    <span>{a.order}</span>
                  </div>{" "}
                  <div>
                    {a.authorShort && (
                      <div className="publication-article-author">
                        {a.authorShort}
                      </div>
                    )}
                    <div className="publication-article-title">{a.title}</div>
                  </div>
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
