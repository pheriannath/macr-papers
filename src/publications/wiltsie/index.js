import ArtistPanel from "./artistpanel";
import Bibliography from "./bibliography";
import Foreword from "./foreword";
import Gallery from "./gallery";
import MitchellWiltsie from "./mitchell_wiltsie";

const publication = {
  id: "wiltsie",
  author: "Wiltsie",
  authorFull: "Tina Wiltsie",
  name: "Pots on Pots",
  articles: [
    {
      id: "foreword",
      order: 1,
      title: "Foreword",
      author: "Tina Wiltsie",
      authorShort: "Wiltsie",
      tags: [
        "new writing (student)",
        "introduction",
        "craft studies",
        "interdisciplinarity",
        "macr program",
        "methodology",
      ],
      citation: `Wiltsie, Tina. “Foreword,” Pots on Pots, edited by Tina Wiltsie. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-9-4 `,
      url: "https://www.theMACRPapers.com/wiltsie/foreword",
      component: <Foreword />,
    },
    {
      id: "mitchell_wiltsie",
      order: 2,
      title:
        "From Metapictures to Metacraft? An Interview with W. J. T. Mitchell",
      author: "W. J. T. Mitchell & Tina Wiltsie",
      authorShort: "Mitchell & Wiltsie",
      tags: [
        "new writing (student)",
        "interview",
        "aesthetics",
        "agency",
        "methodology",
        "philosophy",
        "writing",
      ],
      citation: `Mitchell, W. J. T. and Tina Wiltsie. “From Metapictures to Metacraft? An Interview with W. J. T. Mitchell,” Pots on Pots, edited by Tina Wiltsie. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-9-4 `,
      url: "https://www.theMACRPapers.com/wiltsie/mitchell_wiltsie",
      component: <MitchellWiltsie />,
    },
    {
      id: "gallery",
      order: 3,
      title: "Enduring Form: Objects Depicting Ceramics across Time",
      author: "Tina Wiltsie",
      authorShort: "Wiltsie",
      tags: [
        "new writing (student)",
        "visual essay",
        "anthropology",
        "ceramic",
        "learning with objects",
        "mapping",
        "movement",
        "museum labels",
      ],
      citation: `Wiltsie, Tina. “Enduring Form: Objects Depicting Ceramics across Time,” Pots on Pots, edited by Tina Wiltsie. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-9-4 `,
      url: "https://www.theMACRPapers.com/wiltsie/gallery",
      component: <Gallery />,
    },
    {
      id: "artistpanel",
      order: 4,
      title:
        "History Surrounds Us: A Conversation with Mariko Paterson, Molly Hatch, and Kevin McNamee-Tweed",
      author:
        "Molly Hatch, Kevin McNamee-Tweed, Mariko Paterson & Tina Wiltsie",
      authorShort: "Hatch, McNamee-Tweed, Paterson, & Wiltsie",
      tags: [
        "new writing (student)",
        "interview",
        "ceramic",
        "community",
        "conversation",
        "craft practices",
        "interdisciplinarity",
        "material knowledge",
        "materiality",
      ],
      citation: `Hatch, Molly, Kevin McNamee-Tweed, Mariko Paterson and Tina Wiltsie. “History Surrounds Us: A Conversation with Mariko Paterson, Molly Hatch, and Kevin McNamee-Tweed,” Pots on Pots, edited by Tina Wiltsie. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-9-4 `,
      url: "https://www.theMACRPapers.com/wiltsie/artistpanel",
      component: <ArtistPanel />,
    },
    {
      id: "bibliography",
      order: 5,
      title: "Gathering Raw Materials: A Bibliography of Suggested Readings",
      author: "Tina Wiltsie",
      authorShort: "Wiltsie",
      tags: [
        "new writing (student)",
        "bibliography",
        "craft studies",
        "interdisciplinarity",
        "macr program",
        "methodology",
      ],
      citation: `Wiltsie, Tina. “Gathering Raw Materials: A Bibliography of Suggested Readings,” Pots on Pots, edited by Tina Wiltsie. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-9-4 `,
      url: "https://www.theMACRPapers.com/wiltsie/bibliography",
      component: <Bibliography />,
    },
  ],
  accent: "#41ae4a",
  firstArticle: "foreword",
};

export default publication;
