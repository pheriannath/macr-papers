import React from "react";
import { useParams } from "react-router";
import { PUBLICATIONS } from "../../publications";

const Article = () => {
  const { pubId, articleId } = useParams();
  const publication = PUBLICATIONS?.find((pub) => pub.id === pubId);
  const articles = publication?.articles;
  const WhichArticle = articles.find((article) => article.id === articleId);

  return (
    <article>
      <h4>{publication.authorFull}</h4>
      {WhichArticle.component}
    </article>
  );
};

export default Article;
