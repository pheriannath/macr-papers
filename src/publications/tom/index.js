import Foreword from "./foreword";
import Acknowledgements from "./acknowledgements";
import Epigraph from "./epigraph";
import Ancestry from "./ancestry";
import Aufhebung from "./aufhebung";
import Coalesce from "./coalesce";
import Ecology from "./ecology";
import Educate from "./educate";
import Enchant from "./enchant";
import Evolve from "./evolve";
import Ghost from "./ghost";
import Grave from "./grave";
import Legacy from "./legacy";
import Lifespan from "./lifespan";
import Liminal from "./liminal";
import Magic from "./magic";
import Map from "./map";
import Memorial from "./memorial";
import Offering from "./offering";
import Palimpsest from "./palimpsest";
import Portrait from "./portrait";
import Predict from "./predict";
import Publication from "./publication";
import Queer from "./queer";
import Reframe from "./reframe";
import Renewal from "./renewal";
import Repair from "./repair";
import Resolve from "./resolve";
import Souvenir from "./souvenir";
import Speculate from "./speculate";
import Subvert from "./subvert";
import Talisman from "./talisman";
import Zombie from "./zombie";
import Eulogy from "./eulogy";
import Archive from "./archive";

const publication = {
  pubId: "tom",
  id: "tom",
  author: "Tom",
  authorFull: "Rena Tom",
  name: "Encyclopedia of Craft Studies (Abridged)",
  articles: [
    {
      pubId: "tom",
      id: "foreword",
      order: 1,
      title: "Foreword",
      author: "Rena Tom",
      authorShort: "Tom",
      tags: [
        "new writing (student)",
        "introduction",
        "interdisciplinarity",
        "knowledge classification",
      ],
      citation: `Tom, Rena. "Foreword," Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/foreword",
      component: <Foreword />,
    },
    {
      pubId: "tom",
      id: "acknowledgements",
      order: 2,
      title: "Acknowledgements",
      author: "Rena Tom",
      authorShort: "Tom",
      tags: ["community", "macr program", "support networks"],
      citation: `Tom, Rena. "Acknowledgments," Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/acknowledgments",
      component: <Acknowledgements />,
    },
    {
      pubId: "tom",
      id: "epigraph",
      order: 3,
      title: "Epigraph",
      author: "Rena Tom",
      authorShort: "Tom",
      tags: ["reprint", "excerpt", "future", "renewal"],
      citation: `Tom, Rena. “Epigraph,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/epigraph ",
      component: <Epigraph />,
    },
    {
      pubId: "tom",
      id: "ancestry",
      order: 4,
      title: "Ancestry",
      author: "Rena Tom",
      authorShort: "Tom",
      tags: [
        "reprint",
        "visual essay",
        "anthropology",
        "community",
        "heritage",
        "memory",
        "methodology",
      ],
      citation: `Tom, Rena. “Ancestry,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/ancestry ",
      component: <Ancestry />,
    },
    {
      pubId: "tom",
      id: "archive",
      order: 5,
      title: "Archive",
      author: "Namita Gupta Wiggers",
      authorShort: "Gupta Wiggers",
      tags: [
        "new writing (faculty)",
        "essay",
        "appalachia",
        "black history",
        "community",
        "craft studies",
        "craftscape",
        "erasure",
        "heritage",
        "indigenous knowledge",
        "memory",
        "methodology",
        "space making",
      ],
      citation: `Wiggers, Namita Gupta. “Archive,” Encyclopedia of Craft Studies (Abridged), edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7  `,
      url: "https://www.theMACRPapers.com/tom/archive",
      component: <Archive />,
    },
    {
      pubId: "tom",
      id: "aufhebung",
      order: 6,
      title: "Aufhebung",
      author: "Lucia Ilene Wallace",
      authorShort: "Wallace",
      tags: [
        "reprint",
        "excerpt",
        "absence",
        "ceramic",
        "destruction",
        "objectlessness",
        "renewal",
      ],
      citation: `Wallace, Lucia Ilene. “Aufhebung,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/aufhebung ",
      component: <Aufhebung />,
    },
    {
      pubId: "tom",
      id: "coalesce",
      order: 7,
      title: "Coalesce",
      author: "Rena Tom",
      authorShort: "Tom",
      tags: [
        "new writing (student)",
        "visual essay",
        "community",
        "future",
        "support networks",
      ],
      citation: `Tom, Rena. “Coalesce,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/coalesce",
      component: <Coalesce />,
    },
    {
      pubId: "tom",
      id: "ecology",
      order: 8,
      title: "Ecology",
      author: "Anna Lowenhaupt Tsing",
      authorShort: "Tsing",
      tags: ["reprint", "excerpt", "death", "destruction", "ecology", "future"],
      citation: `Tsing, Anna Lowenhaupt. “Ecology,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/ecology",
      component: <Ecology />,
    },
    {
      pubId: "tom",
      id: "educate",
      order: 9,
      title: "Educate",
      author: "Rena Tom",
      authorShort: "Tom",
      tags: [
        "new writing (student)",
        "visual essay",
        "community",
        "craft studies",
        "pedagogy",
        "support networks",
      ],
      citation: `Tom, Rena. “Educate,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/educate",
      component: <Educate />,
    },
    {
      pubId: "tom",
      id: "enchant",
      order: 10,
      title: "Enchant",
      author: "Karen Wilson Baptist",
      authorShort: "Baptist",
      tags: [
        "reprint",
        "excerpt",
        "absence",
        "memory",
        "philosophy",
        "transcience",
      ],
      citation: `Baptist, Karen Wilson. “Enchant,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/enchant",
      component: <Enchant />,
    },
    {
      pubId: "tom",
      id: "evolve",
      order: 11,
      title: "Evolve",
      author: "Rena Tom",
      authorShort: "Tom",
      tags: [
        "new writing (student)",
        "visual essay",
        "absence",
        "curation",
        "knowledge classification",
      ],
      citation: `Tom, Rena. “Evolve,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/evolve",
      component: <Evolve />,
    },
    {
      pubId: "tom",
      id: "ghost",
      order: 12,
      title: "Ghost",
      author: "Sara Clugage",
      authorShort: "Clugage",
      tags: [
        "new writing (faculty)",
        "essay",
        "absence",
        "craft studies",
        "future",
        "materiality",
      ],
      citation: `Clugage, Sara. “Ghost,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/ghost ",
      component: <Ghost />,
    },
    {
      pubId: "tom",
      id: "grave",
      order: 13,
      title: "Grave",
      author: "Jarrett M. Drake",
      authorShort: "Drake",
      tags: ["reprint", "excerpt", "archives", "community", "death", "future"],
      citation: `Drake, Jarrett M. “Grave,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/grave ",
      component: <Grave />,
    },
    {
      pubId: "tom",
      id: "legacy",
      order: 14,
      title: "Legacy",
      author: "Rena Tom",
      authorShort: "Tom",
      tags: [
        "coursework",
        "visual essay",
        "absence",
        "craft practices",
        "heritage",
        "mapping",
      ],
      citation: `Tom, Rena. “Legacy,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/legacy",
      component: <Legacy />,
    },
    {
      pubId: "tom",
      id: "lifespan",
      order: 15,
      title: "Lifespan",
      author: "Paul Benzon and Future Library",
      authorShort: "Benzon & Future Library",
      tags: [
        "reprint",
        "excerpt",
        "ecology",
        "future",
        "heritage",
        "self-publishing",
        "writing",
      ],
      citation: `Benzon, Paul and Future Library. “Lifespan,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/lifespan",
      component: <Lifespan />,
    },
    {
      pubId: "tom",
      id: "liminal",
      order: 16,
      title: "Liminal",
      author: "Alex Singh",
      authorShort: "Singh",
      tags: [
        "reprint",
        "excerpt",
        "interdisciplinarity",
        "philosophy",
        "weaving",
      ],
      citation: `Singh, Alex. “Liminal,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/liminal ",
      component: <Liminal />,
    },
    {
      pubId: "tom",
      id: "magic",
      order: 17,
      title: "Magic",
      author: "Rena Tom",
      authorShort: "Tom",
      tags: [
        "new writing (student)",
        "visual essay",
        "absence",
        "aesthetics",
        "embodied knowledge",
        "philosophy",
        "transcience",
      ],
      citation: `Tom, Rena. “Magic,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/magic",
      component: <Magic />,
    },
    {
      pubId: "tom",
      id: "map",
      order: 18,
      title: "Map",
      author: "Rena Tom",
      authorShort: "Tom",
      tags: [
        "coursework",
        "visual essay",
        "community",
        "craft studies",
        "knowledge classification",
        "mapping",
        "resistance",
      ],
      citation: `Tom, Rena. “Map,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/map",
      component: <Map />,
    },
    {
      pubId: "tom",
      id: "memorial",
      order: 19,
      title: "Memorial",
      author: "Rena Tom",
      authorShort: "Tom",
      tags: [
        "new writing (student)",
        "visual essay",
        "ecology",
        "memory",
        "transcience",
      ],
      citation: `Tom, Rena. “Memorial,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/memorial",
      component: <Memorial />,
    },
    {
      pubId: "tom",
      id: "offering",
      order: 20,
      title: "Offering",
      author: "Phoebe Cheng",
      authorShort: "Cheng",
      tags: [
        "reprint",
        "essay",
        "aesthetics",
        "anthropology",
        "community",
        "heritage",
        "transcience",
      ],
      citation: `Cheng, Phoebe. “Offering,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/offering",
      component: <Offering />,
    },
    {
      pubId: "tom",
      id: "palimpsest",
      order: 21,
      title: "Palimpsest",
      author: "Indira Allegra",
      authorShort: "Allegra",
      tags: [
        "new writing (contributor)",
        "essay",
        "labor",
        "transcience",
        "weaving",
      ],
      citation: `Allegra, Indira. “Palimpsest,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/palimpsest",
      component: <Palimpsest />,
    },
    {
      pubId: "tom",
      id: "portrait",
      order: 22,
      title: "Portrait",
      author: "Rena Tom",
      authorShort: "Tom",
      tags: [
        "new writing (student)",
        "visual essay",
        "community",
        "support networks",
      ],
      citation: `Tom, Rena. “Portrait,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/portrait",
      component: <Portrait />,
    },
    {
      pubId: "tom",
      id: "predict",
      order: 23,
      title: "Predict",
      author: "Andres Payan Estrada",
      authorShort: "Estrada",
      tags: [
        "new writing (faculty)",
        "visual essay",
        "aesthetics",
        "craft practices",
        "future",
      ],
      citation: `Estrada, Andres Payan. “Predict,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/predict",
      component: <Predict />,
    },
    {
      pubId: "tom",
      id: "publication",
      order: 24,
      title: "Publication",
      author: "Ben Lignel",
      authorShort: "Lignel",
      tags: [
        "new writing (faculty)",
        "essay",
        "community",
        "future",
        "philosophy",
      ],
      citation: `Lignel, Ben. “The Letter R,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/publication ",
      component: <Publication />,
    },
    {
      pubId: "tom",
      id: "queer",
      order: 25,
      title: "Queer",
      author: "matt lambert",
      authorShort: "lambert",
      tags: [
        "new writing (alumni)",
        "essay",
        "community",
        "future",
        "memory",
        "queer life",
      ],
      citation: `lambert, matt. “Queer Companion,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/queer",
      component: <Queer />,
    },
    {
      pubId: "tom",
      id: "reframe",
      order: 26,
      title: "Reframe",
      author: "Rena Tom",
      authorShort: "Tom",
      tags: ["coursework", "essay", "aesthetics", "ethnography"],
      citation: `Tom, Rena. “Reframe,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/reframe",
      component: <Reframe />,
    },
    {
      pubId: "tom",
      id: "renewal",
      order: 27,
      title: "Renewal",
      author: "Brian Potter",
      authorShort: "Potter",
      tags: [
        "reprint",
        "essay",
        "craft studies",
        "destruction",
        "heritage",
        "repair",
      ],
      citation: `Potter, Brian. “Renewal,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/renewal",
      component: <Renewal />,
    },
    {
      pubId: "tom",
      id: "repair",
      order: 28,
      title: "Repair",
      author: "Miriam Devlin",
      authorShort: "Devlin",
      tags: [
        "new writing (student)",
        "essay",
        "aesthetics",
        "future",
        "heritage",
        "renewal",
        "repair",
      ],
      citation: `Devlin, Miriam. “Repair,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/repair ",
      component: <Repair />,
    },
    {
      pubId: "tom",
      id: "resolve",
      order: 29,
      title: "Resolve",
      author: "Jill DiMassimo",
      authorShort: "DiMassimo",
      tags: [
        "new writing (student)",
        "essay",
        "absence",
        "aesthetics",
        "heritage",
      ],
      citation: `DiMassimo, Jill. “Resolve,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/resolve",
      component: <Resolve />,
    },
    {
      pubId: "tom",
      id: "souvenir",
      order: 30,
      title: "Souvenir",
      author: "Rena Tom",
      authorShort: "Tom",
      tags: [
        "new writing (student)",
        "essay",
        "absence",
        "community",
        "future",
        "memory",
      ],
      citation: `Tom, Rena. “Souvenir,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/souvenir",
      component: <Souvenir />,
    },
    {
      pubId: "tom",
      id: "speculate",
      order: 31,
      title: "Speculate",
      author: "Tom Martin",
      authorShort: "Martin",
      tags: [
        "new writing (faculty)",
        "essay",
        "absence",
        "future",
        "phenomenology",
        "philosophy",
      ],
      citation: `Martin, Tom. “Speculate”, Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/speculate",
      component: <Speculate />,
    },
    {
      pubId: "tom",
      id: "subvert",
      order: 32,
      title: "Subvert",
      author: "Rena Tom",
      authorShort: "Tom",
      tags: [
        "new writing (student)",
        "essay",
        "craft studies",
        "philosophy",
        "resistance",
      ],
      citation: `Tom, Rena. “Subvert,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/subvert",
      component: <Subvert />,
    },
    {
      pubId: "tom",
      id: "talisman",
      order: 33,
      title: "Talisman",
      author: "Kasey Smith",
      authorShort: "Smith",
      tags: [
        "new writing (contributor)",
        "essay",
        "craft practices",
        "ecology",
        "future",
        "heritage",
        "renewal",
      ],
      citation: `Smith, Kasey. “Talisman,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/talisman",
      component: <Talisman />,
    },
    {
      pubId: "tom",
      id: "zombie",
      order: 34,
      title: "Zombie",
      author: "Greg Garrett",
      authorShort: "Garrett",
      tags: ["reprint", "excerpt", "aesthetics", "renewal"],
      citation: `Garrett, Greg. “Zombie,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/zombie ",
      component: <Zombie />,
    },
    {
      pubId: "tom",
      id: "eulogy",
      order: 35,
      title: "Eulogy",
      author: "Rena Tom",
      authorShort: "Tom",
      tags: [
        "new writing (student)",
        "essay",
        "absence",
        "future",
        "memory",
        "pedagogy",
        "renewal",
      ],
      citation: `Tom, Rena. “Eulogy,” Encyclopedia of Craft Studies (Abridged) edited by Rena Tom. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-8-7 `,
      url: "https://www.theMACRPapers/tom/eulogy ",
      component: <Eulogy />,
    },
  ],
  accent: "#e5bd01",
  firstArticle: "foreword",
};

export default publication;
