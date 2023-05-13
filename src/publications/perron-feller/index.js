import Foreword from "./foreword";
import WallKimmerer from "./wallkimmerer";
import DenHerder from "./denherder";
import Buckert from "./buckert";
import Johnson from "./johnson";

const publication = {
  id: "perron-feller",
  author: "Perron-Feller",
  authorFull: "Beryl Perron-Feller",
  name: "Finding Common Ground Through Craft",
  articles: [
    {
      id: "foreword",
      order: 1,
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
    {
      id: "wallkimmerer",
      order: 2,
      title: `"Asters and Goldenrod," from Braiding Sweetgrass`,
      author: "Robin Wall Kimmerer",
      tags: [
        "reprint",
        "chapter",
        "ecology",
        "indigenous knowledge",
        "pedagogy",
      ],
      citation: `Perron-Feller, Beryl. “Introduction: Robin Wall Kimmerer,” in Finding Common Ground Through Craft, edited by Beryl Peron-Feller. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-3-2 `,
      url: "https://www.theMACRPapers.com/perron-feller/wallkimmerer",
      component: <WallKimmerer />,
    },
    {
      id: "denherder",
      order: 3,
      title: `Ecology of Built Environments: An Interview with Structural Engineer Justin Den Herder`,
      author: "Beryl Perron-Feller",
      tags: [
        "new writing (student)",
        "interview",
        "community",
        "ecology",
        "land",
        "pedagogy",
        "poetry",
      ],
      citation: `Perron-Feller, Beryl. “Ecology of Built Environments: An Interview with Structural Engineer Justin Den Herder,” in Finding Common Ground Through Craft, edited by Beryl Peron-Feller. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-3-2 `,
      url: "https://www.theMACRPapers.com/perron-feller/denherder",
      component: <DenHerder />,
    },
    {
      id: "buckert",
      order: 4,
      title: `Constructing an Interdisciplinary Life: An Oral History with Morgan Buckert`,
      author: "Beryl Perron-Feller",
      tags: [
        "new writing (student)",
        "interview",
        "apprenticeship",
        "community",
        "craft practices",
        "ecology",
        "materiality",
        "pedagogy",
      ],
      citation: `Perron-Feller, Beryl. “Constructing an Interdisciplinary Life: An Oral History with Morgan Buckert,” in Finding Common Ground Through Craft, edited by Beryl Peron-Feller. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-3-2 `,
      url: "https://www.theMACRPapers.com/perron-feller/buckert",
      component: <Buckert />,
    },
    {
      id: "johnson",
      order: 5,
      title: `Surgent Love `,
      author: "Emily Johnson",
      tags: [
        "reprint",
        "essay",
        "community",
        "dance",
        "heritage",
        "indigenous knowledge",
        "land",
        "performance",
        "resistance",
      ],
      citation: `Perron-Feller, Beryl. “Introduction: Emily Johnson,” in Finding Common Ground Through Craft, edited by Beryl Peron-Feller. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-3-2 `,
      url: "https://www.theMACRPapers.com/perron-feller/johnson",
      component: <Johnson />,
    },
  ],
  accent: "#f36321",
};

export default publication;
