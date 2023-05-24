import React from "react";
import { useParams, NavLink } from "react-router-dom";
import { KEYWORD_MAP } from "../../data/keywords";

const Keyword = () => {
  const { keyId } = useParams();
  const keyword = KEYWORD_MAP.find((k) => k.id === keyId);

  console.log(keyword);

  return (
    <div>
      <h2>{keyword.name}</h2>
      <ul>
        {keyword.articles.map((a) => (
          <li>
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
