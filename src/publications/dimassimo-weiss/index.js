import Approach from "./approach";
import DiMassimoWeissWiggers from "./dimassimo_weiss_wiggers";
import EditorNote from "./editornote";
import DiMassimoMomonWeiss from "./dimassimo_momon_weiss";
import Absence from "./absence";
import Hatch from "./hatch";
import Goodman from "./goodman";
import Presence from "./presence";
import DiMassimo from "./dimassimo";
import Hand from "./hand";
import Materials from "./materials";
import PerronFeller from "./perron-feller";
import Making from "./making";
import Devlin from "./devlin";
import AwakeRyland from "./awake_ryland";

const publication = {
  pubId: "dimassimo_weiss",
  id: "dimassimo_weiss",
  author: "DiMassimo & Weiss",
  authorFull: "Jill DiMassimo & Joanna Weiss",
  name: "Reclaiming the Center: Making Way for Black Craft",
  articles: [
    {
      pubId: "dimassimo_weiss",
      id: "editornote",
      order: 1,
      title: "Making Room, Making Connections, Making History: Editor's Note",
      author: "Jill DiMassimo & Joanna Weiss",
      authorShort: "DiMassimo & Weiss",
      tags: [
        "new writing (student)",
        "introduction",
        "archives",
        "black craftspeople",
        "black history",
        "craft practices",
        "craft studies",
        "erasure",
        "labor",
        "methodology",
        "macr program",
      ],
      citation: `DiMassimo, Jill and Joanna Weiss, "Making Room, Making Connections, Making History: Editors' Note," Reclaiming the Center: Making Way for Black Craft, edited by Jill DiMassimo and Joanna Weiss. The MACR Papers, Swannanoa, NC: the MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-3-2`,
      url: "https://www.theMACRPapers.com/dimassimo_weiss/editornote",
      component: <EditorNote />,
    },
    {
      pubId: "dimassimo_weiss",
      id: "approach",
      order: 2,
      title: "Approach",
      author: "Jill DiMassimo and Joanna Weiss",
      authorShort: "DiMassimo & Weiss",
      tags: [
        "new writing (student)",
        "introduction",
        "craft studies",
        "education",
        "macr program",
        "pedagogy",
      ],
      citation: `DiMassimo, Jill and Joanna Weiss. “Approach,” Reclaiming the Center: Making Way for Black Craft edited by Jill DiMassimo and Joanna Weiss. The MACR Papers, Swannanoa, NC: the MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-4-9  `,
      url: "https://www.theMACRPapers.com/dimassimo_weiss/approach",
      component: <Approach />,
    },
    {
      pubId: "dimassimo_weiss",
      id: "dimassimo_weiss_wiggers",
      order: 2.1,
      title:
        "Interview with Namita Gupta Wiggers: A Focused Oral History on the MACR Creation",
      author: "Namita Gupta Wiggers, Jill DiMassimo, and Joanna Weiss",
      authorShort: "Wiggers, DiMassimo & Weiss",
      tags: [
        "new writing",
        "interview",
        "community",
        "craft studies",
        "curation",
        "decolonization",
        "macr program",
        "pedagogy",
      ],
      citation: `DiMassimo, Jill, Joanna Weiss, and Namita Gupta Wiggers. “Interview with Namita Gupta Wiggers: A Focused Oral History on the MACR Creation,” Reclaiming the Center: Making Way for Black Craft, edited by Jill DiMassimo and Joanna Weiss. The MACR Papers, Swannanoa, NC: the MA in Critical Craft Studies, 2023. Copyright remains with the author. 978-1-7351592-4-9 `,
      url: "https://www.theMACRPapers.com/dimassimo_weiss/dimassimo_weiss_wiggers",
      component: <DiMassimoWeissWiggers />,
    },
    {
      pubId: "dimassimo_weiss",
      id: "dimassimo_momon_weiss",
      order: 2.2,
      title:
        "Interview with Dr. Tiffany Momon: Public Historian, BCDA Founder, and MACR Professor",
      author: "Tiffany Momon, Jill DiMassimo, and Joanna Weiss",
      authorShort: "Momon, DiMassimo & Weiss",
      tags: [
        "new writing",
        "interview",
        "black craftspeople",
        "black history",
        "craft studies",
        "fieldwork",
        "macr program",
        "methodology",
        "pedagogy",
        "public history",
      ],
      citation: `DiMassimo, Jill, Tiffany Momon, and Joanna Weiss. “Interview with Dr. Tiffany Momon: Public Historian, BCDA Founder and MACR Professor,” Reclaiming the Center: Making Way for Black Craft, edited by Jill DiMassimo and Joanna Weiss. The MACR Papers, Swannanoa, NC: the MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-4-9  `,
      url: "https://www.theMACRPapers.com/dimassimo_weiss/ dimassimo_momon_weiss",
      component: <DiMassimoMomonWeiss />,
    },
    {
      pubId: "dimassimo_weiss",
      id: "absence",
      order: 3,
      title: "Absence",
      author: "Jill DiMassimo and Joanna Weiss",
      authorShort: "DiMassimo & Weiss",
      tags: [
        "new writing (student)",
        "introduction",
        "archives",
        "craft studies",
        "erasure",
      ],
      citation: `DiMassimo, Jill and Joanna Weiss. “Absence,” Reclaiming the Center: Making Way for Black Craft edited by Jill DiMassimo and Joanna Weiss. The MACR Papers, Swannanoa, NC: the MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-4-9  `,
      url: "https://www.theMACRPapers.com/dimassimo_weiss/absence",
      component: <Absence />,
    },
    {
      pubId: "dimassimo_weiss",
      id: "hatch",
      order: 3.1,
      title: "Redacted",
      author: "Michael Hatch",
      authorShort: "Hatch",
      tags: [
        "new writing (alumni)",
        "essay",
        "appalachia",
        "archives",
        "black history",
        "craft studies",
        "curation",
        "erasure",
      ],
      citation: `Hatch, Michael. “Redacted,” Reclaiming the Center: Making Way for Black Craft edited by Jill DiMassimo and Joanna Weiss. The MACR Papers, Swannanoa, NC: the MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-4-9  `,
      url: "https://www.theMACRPapers.com/dimassimo_weiss/hatch",
      component: <Hatch />,
    },
    {
      pubId: "dimassimo_weiss",
      id: "goodman",
      order: 3.2,
      title: "Reflections on “In the Fray”",
      author: "Mellanee Goodman",
      authorShort: "Goodman",
      tags: [
        "new writing (alumni)",
        "essay",
        "appalachia",
        "black craftspeople",
        "black history",
        "black women",
        "craft practices",
        "craft studies",
        "enslavement",
        "erasure",
        "labor",
      ],
      citation: `Goodman, Mellanee. “Reflections on ‘In the Fray,’” Reclaiming the Center: Making Way for Black Craft, edited by Jill DiMassimo and Joanna Weiss. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-4-9  `,
      url: "https://www.theMACRPapers.com/dimassimo_weiss/goodman",
      component: <Goodman />,
    },
    {
      pubId: "dimassimo_weiss",
      id: "presence",
      order: 4,
      title: "Presence",
      author: "Jill DiMassimo and Joanna Weiss",
      authorShort: "DiMassimo & Weiss",
      tags: [
        "new writing (student)",
        "introduction",
        "biography",
        "craft studies",
      ],
      citation: `DiMassimo, Jill and Joanna Weiss. “Presence,” Reclaiming the Center: Making Way for Black Craft edited by Jill DiMassimo and Joanna Weiss. The MACR Papers, Swannanoa, NC: the MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-4-9  `,
      url: "https://www.theMACRPapers.com/dimassimo_weiss/presence",
      component: <Presence />,
    },
    {
      pubId: "dimassimo_weiss",
      id: "dimassimo",
      order: 4.1,
      title: "Mapping Commeraw’s Jar",
      author: "Jill DiMassimo",
      authorShort: "DiMassimo",
      tags: [],
      citation: `DiMassimo, Jill. “Mapping Commeraw’s Jar,” Reclaiming the Center: Making Way for Black Craft, edited by Jill DiMassimo and Joanna Weiss. The MACR Papers, Swannanoa, NC: the MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-4-9  `,
      url: "https://www.theMACRPapers.com/dimassimo_weiss/dimassimo",
      component: <DiMassimo />,
    },
    {
      pubId: "dimassimo_weiss",
      id: "hand",
      order: 4.2,
      title:
        "Made to Order: Edmonia Lewis and Repercussions of the Tourist Trade on a Sculptural Practice",
      author: "Jennifer Hand",
      authorShort: "Hand",
      tags: [
        "coursework",
        "essay",
        "biography",
        "black craftspeople",
        "black women",
        "craft studies",
        "identity",
        "indigenous knowledge",
      ],
      citation: `Hand, Jennifer. “Made to Order: Edmonia Lewis and Repercussions of the Tourist Trade on a Sculptural Practice,” Reclaiming the Center: Making Way for Black Craft, edited by Jill DiMassimo and Joanna Weiss. The MACR Papers, Swannanoa: the MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-4-9  `,
      url: "https://www.theMACRPapers.com/dimassimo_weiss/hand",
      component: <Hand />,
    },
    {
      pubId: "dimassimo_weiss",
      id: "materials",
      order: 5,
      title: "Materials",
      author: "Jill DiMassimo and Joanna Weiss",
      authorShort: "DiMassimo & Weiss",
      tags: [
        "new writing (student)",
        "introduction",
        "craft studies",
        "materiality",
        "place",
      ],
      citation: `DiMassimo, Jill and Joanna Weiss. “Materials,” Reclaiming the Center: Making Way for Black Craft edited by Jill DiMassimo and Joanna Weiss. The MACR Papers, Swannanoa, NC: the MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-4-9  `,
      url: "https://www.theMACRPapers.com/dimassimo_weiss/materials",
      component: <Materials />,
    },
    {
      pubId: "dimassimo_weiss",
      id: "placeholder",
      order: 5.1,
      title: "",
      author: "",
      authorShort: "",
      tags: [],
      citation: ``,
      url: "",
      component: "",
    },
    {
      pubId: "dimassimo_weiss",
      id: "perron-feller",
      order: 5.2,
      title:
        "Material Encounters: A Moment of Bringing Black Craft History into the Present through Fieldwork",
      author: "Beryl Perron-Feller",
      authorShort: "Perron-Feller",
      tags: [
        "new writing (student)",
        "visual essay",
        "black history",
        "ceramic",
        "craft studies",
        "education",
        "fieldwork",
        "macr program",
        "material knowledge",
        "materiality",
        "place",
        "public history",
      ],
      citation: `Perron-Feller, Beryl. “Material Encounters: A Moment of Bringing Black Craft History into the Present through Fieldwork,” Reclaiming the Center: Making Way for Black Craft edited by Jill DiMassimo and Joanna Weiss. The MACR Papers, Swannanoa, NC: the MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-4-9  `,
      url: "https://www.theMACRPapers.com/dimassimo_weiss/perron-feller",
      component: <PerronFeller />,
    },
    {
      pubId: "dimassimo_weiss",
      id: "making",
      order: 6,
      title: "Making",
      author: "Jill DiMassimo and Joanna Weiss",
      authorShort: "DiMassimo & Weiss",
      tags: [
        "new writing (student)",
        "introduction",
        "craft practices",
        "craft studies",
        "material knowledge",
      ],
      citation: `DiMassimo, Jill and Joanna Weiss. “Making,” in Reclaiming the Center: Making Way for Black Craft edited by Jill DiMassimo and Joanna Weiss. The MACR Papers, Swannanoa, NC: the MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-4-9  `,
      url: "https://www.theMACRPapers.com/dimassimo_weiss/making",
      component: <Making />,
    },
    {
      pubId: "dimassimo_weiss",
      id: "devlin",
      order: 6.1,
      title: "Exceptional, Typical, Chairs by Dick Poynor",
      author: "Miriam Devlin",
      authorShort: "Devlin",
      tags: [
        "coursework",
        "essay",
        "appalachia",
        "biography",
        "black craftspeople",
        "black history",
        "chairs",
        "craft studies",
        "erasure",
        "material knowledge",
        "woodworking",
      ],
      citation: `Devlin, Miriam. “Exceptional, Typical, Chairs by Dick Poynor,” Reclaiming the Center: Making Way for Black Craft, edited by Jill DiMassimo and Joanna Weiss. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-4-9  `,
      url: "https://www.theMACRPapers.com/dimassimo_weiss/devlin",
      component: <Devlin />,
    },
    {
      pubId: "dimassimo_weiss",
      id: "awake_ryland",
      order: 6.2,
      title: "Combatting Erasure",
      author: "Robell Awake and Charlie Ryland",
      authorShort: "Awake & Ryland",
      tags: [
        "new writing (contributor)",
        "visual essay",
        "black craftspeople",
        "black history",
        "chairs",
        "craft practices",
        "craft studies",
        "erasure",
        "material knowledge",
        "skill acquisition",
        "woodworking",
      ],
      citation: `Awake, Robell and Charlie Ryland. “Combatting Erasure,” Reclaiming the Center: Making Way for Black Craft, edited by Jill DiMassimo and Joanna Weiss. The MACR Papers, Swannanoa, NC: the MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-4-9  `,
      url: "https://www.theMACRPapers.com/dimassimo_weiss/awake_ryland",
      component: <AwakeRyland />,
    },
  ],
  accent: "#ec008c",
  firstArticle: "editornote",
};

export default publication;
