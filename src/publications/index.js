// Pubs
import DimassimoWeiss from "./dimassimo-weiss";
import Hand from "./hand";
import Devlin from "./devlin";
import Tom from "./tom";
import Wiltsie from "./wiltsie";
import PerronFeller from "./perron-feller";
import LignelWiggers from "./lignel-wiggers";

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

  const kwMap = tags.map((t) => {
    return {
      id: renderSafeTag(t),
      name: t,
      articles: [],
    };
  });

  ARTICLES.map((article) => {
    const { pubId, id, order, author, authorShort, title } = article;

    article.tags.forEach((tag) => {
      const kw = kwMap.find((k) => k.id === renderSafeTag(tag));

      kw.articles.push({
        pubId,
        id,
        order,
        author,
        authorShort,
        title,
      });
    });
  });

  return kwMap;
};

export const ARTICLE_MAP = getArticlesForTags();

// Uncomment the below if we need to regenerate the keyword map.
// const data = JSON.stringify(ARTICLE_MAP);
// console.log(data);
