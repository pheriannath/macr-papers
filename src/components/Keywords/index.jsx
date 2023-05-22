import React from "react";
import { getAllTags, renderSafeTag, ARTICLE_MAP } from "../../publications";
import { NavLink } from "react-router-dom";

const Keywords = () => {
  const tagList = getAllTags();

  return (
    <div>
      <h2>Keywords</h2>
      <ul>
        {tagList.map((tag, i) => {
          const safeTag = renderSafeTag(tag);
          return (
            <li key={`tag-${i}`}>
              <h2>{tag}</h2>
              <ul style={{ marginLeft: "1rem" }}>
                {ARTICLE_MAP?.[safeTag].map((article, i) => (
                  <li key={`article-${i}`}>
                    <NavLink to={`/${article.pubId}/${article.id}`}>
                      <h3>
                        {article.author}: {article.title}
                      </h3>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Keywords;
