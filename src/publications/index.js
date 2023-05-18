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

// Helper function to get all unique tags
const getAllTags = () => {
  const allArticles = [
    ...Devlin.articles,
    ...DimassimoWeiss.articles,
    ...Hand.articles,
    ...LignelWiggers.articles,
    ...PerronFeller.articles,
    ...Tom.articles,
    ...Wiltsie.articles,
  ];

  let tags = [];

  allArticles.forEach((article) => {
    article.tags.forEach((tag) => tags.push(tag));
  });

  const allTags = Array.from(new Set(tags)).sort();

  return allTags;
};
