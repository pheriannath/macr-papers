// Pubs
import DimassimoWeiss from "./dimassimo-weiss";
import Hand from "./hand";
import Devlin from "./devlin";
import Tom from "./tom";
import Wiltsie from "./wiltsie";
import PerronFeller from "./perron-feller";
import LignelWiggers from "./lignel-wiggers";
import { render } from "react-dom";

export const PUBLICATIONS = [
  Devlin,
  DimassimoWeiss,
  Hand,
  LignelWiggers,
  PerronFeller,
  Tom,
  Wiltsie,
];

const ARTICLES = [
  ...Devlin.articles,
  ...DimassimoWeiss.articles,
  ...Hand.articles,
  ...LignelWiggers.articles,
  ...PerronFeller.articles,
  ...Tom.articles,
  ...Wiltsie.articles,
];

// Helper function to get all unique tags
export const getAllTags = () => {
  let tags = [];

  ARTICLES.forEach((article) => {
    article.tags.forEach((tag) => tags.push(tag));
  });

  const allTags = Array.from(new Set(tags)).sort();

  return allTags;
};

// Helper function to make "safe" tag urls
export const renderSafeTag = (tag) => {
  return tag.toLowerCase().replace(/[^\w]/gi, "");
};

// Helper function to get articles for a particular tag
const getArticlesForTags = () => {
  const tags = getAllTags();

  const tagMap = Object.assign(
    ...tags.map((tag) => {
      return { [renderSafeTag(tag)]: [] };
    })
  );

  ARTICLES.map((article) => {
    const { pubId, id, order, author, authorShort, title } = article;

    article.tags.forEach((tag) =>
      tagMap[renderSafeTag(tag)].push({
        pubId,
        id,
        order,
        author,
        authorShort,
        title,
      })
    );
  });

  return tagMap;
};

export const ARTICLE_MAP = getArticlesForTags();
