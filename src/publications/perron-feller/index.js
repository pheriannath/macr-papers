import Foreword from "./foreword";

const publication = {
  id: "perron-feller",
  author: "Perron-Feller",
  authorFull: "Beryl Perron-Feller",
  name: "Finding Common Ground Through Craft",
  articles: [
    {
      id: "foreword",
      title: "Foreword",
      author: "Beryl Perron-Feller",
      tags: [
        "new writing (student)",
        "introduction",
        "craft practices",
        "craft studies",
        "ecology",
        "imagined futures",
        "interdisciplinarity",
        "pedagogy",
      ],
      citation: `Perron-Feller, Beryl. “Foreword,” Finding Common Ground Through Craft, edited by Beryl Peron-Feller. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-3-2 `,
      url: "https://www.theMACRPapers.com/perron-feller/foreword",
      component: <Foreword />,
    },
  ],
  accent: "#f36321",
};

export default publication;
