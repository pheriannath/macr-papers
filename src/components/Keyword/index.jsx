import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { KEYWORD_MAP } from "../../data/keywords";

const Keyword = () => {
  const { keyId } = useParams();
  const keyword = KEYWORD_MAP.find((k) => k.id === keyId);

  return (
    <div>
      <h2>{keyword.name}</h2>
      <ul>
        {keyword.articles.map((a, i) => (
          <li key={i}>
            <NavLink to={`/${a.pubId}/${a.id}`}>
              {a.author}: {a.title}
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Keyword;
