import React from "react";
import { useParams, NavLink } from "react-router-dom";
import Download from "../Download";
import { PUBLICATIONS, renderSafeTag } from "../../publications";
import { KEYWORD_MAP } from "../../data/keywords";

const ArticleHeader = ({
  author,
  order,
  title,
  tags,
  citation,
  url,
  downloadUrl,
}) => {
  return (
    <header>
      <h4 className="author">
        <div className="order">
          <span>{order}</span>
        </div>
        {author}
      </h4>
      <h2 className="title">{title}</h2>
      <ArticleTags tags={tags} />
      <ArticleCitation citation={citation} url={url} />
      {downloadUrl && (
        <div className="download-row">
          <Download />
        </div>
      )}
    </header>
  );
};

const ArticleCitation = ({ citation, url }) => {
  return (
    <div>
      <cite className="main-citation">
        {citation}&nbsp;|&nbsp; <a href={url}>{url}</a>
      </cite>
    </div>
  );
};

const ArticleTags = ({ tags }) => {
  return (
    <ul className="tags">
      {tags.map((t, i) => {
        const keyword = KEYWORD_MAP.find((k) => k.id === renderSafeTag(t));

        if (!keyword) return;

        return (
          <li key={i}>
            <NavLink to={`/keywords/${keyword.id}`}>{t}</NavLink>
          </li>
        );
      })}
    </ul>
  );
};

const Article = () => {
  const { pubId, articleId } = useParams();
  const publication = PUBLICATIONS?.find((pub) => pub.id === pubId);
  const articles = publication?.articles;
  const article = articles?.find((article) => article.id === articleId);

  return (
    <article>
      <ArticleHeader
        order={article?.order}
        author={article?.author}
        title={article?.title}
        tags={article?.tags}
        url={article?.url}
        citation={article?.citation}
        downloadUrl={article?.downloadUrl}
      />
      {article?.component}
    </article>
  );
};

export default Article;
