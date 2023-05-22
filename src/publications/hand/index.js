import Ahmed from "./ahmed";
import Foreword from "./foreword";
import Hall from "./hall";
import Josselson from "./josselson";
import Joyce from "./joyce";
import LeeAndHand from "./leeandhand";
import Taylor from "./taylor";
import Vowel from "./vowel";

const publication = {
  id: "hand",
  author: "Hand",
  authorFull: "Jennifer Hand",
  name: "The Space Between Us - Writing Across Difference in the Crafts",
  articles: [
    {
      id: "foreword",
      order: 1,
      title: "Foreword",
      author: "Jennifer Hand",
      authorShort: "Hand",
      tags: [
        "new writing",
        "introduction",
        "bias",
        "methodology",
        "self-knowledge",
        "writing",
      ],
      citation: `Hand, Jennifer. “Foreword,” The Space Between Us: Writing Across Difference in the Crafts, edited by Jennifer Hand. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-5-6  `,
      url: "https://www.theMACRPapers/hand/foreword",
      component: <Foreword />,
    },
    {
      id: "hall",
      order: 2,
      title: "Minimal Selves",
      author: "Stuart Hall",
      authorShort: "Hall",
      tags: [
        "reprint",
        "essay",
        "bias",
        "black history",
        "diaspora",
        "identity",
        "self-knowledge",
      ],
      citation: `Hand, Jennifer. “Introduction: Stuart Hall,” The Space Between Us: Writing Across Difference in the Crafts, edited by Jennifer Hand. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-5-6  `,
      url: "https://www.theMACRPapers/hand/hall",
      component: <Hall />,
    },
    {
      id: "joyce",
      order: 3,
      title: "Joyce Scott: Hard Truth in Beauty",
      author: "Jennifer Hand",
      authorShort: "Hand",
      tags: [
        "reprint",
        "interview",
        "black craftspeople",
        "craft practices",
        "criticism",
        "curation",
        "social justice",
      ],
      citation: `Hand, Jennifer. “Joyce Scott: Hard Truth in Beauty,” The Space Between Us: Writing Across Difference in the Crafts, edited by Jennifer Hand. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-5-6  `,
      url: "https://www.theMACRPapers/hand/joyce",
      component: <Joyce />,
    },
    {
      id: "ahmed",
      order: 4,
      title: "A Phenomenology of Whiteness",
      author: "Sara Ahmed",
      authorShort: "Ahmed",
      tags: [
        "reprint",
        "essay",
        "anti-racism",
        "critical race theory",
        "decolonization",
      ],
      citation: `Hand, Jennifer. “Introduction: Sara Ahmed,” The Space Between Us: Writing Across Difference in the Crafts, edited by Jennifer Hand. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-5-6  `,
      url: "https://www.theMACRPapers/hand/ahmed",
      component: <Ahmed />,
    },
    {
      id: "josselson",
      order: 5,
      title:
        "On Writing Other People’s Lives: Self-analytic Reflections of a Narrative Researcher.",
      author: "Ruthellen Josselson",
      authorShort: "Josselson",
      tags: ["reprint", "chapter", "identity", "oral history"],
      citation: `Hand, Jennifer. “Introduction: Ruthellen Josselson,” The Space Between Us: Writing Across Difference in the Crafts, edited by Jennifer Hand. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-5-6  `,
      url: "https://www.theMACRPapers/hand/josselson",
      component: <Josselson />,
    },
    {
      id: "taylor",
      order: 6,
      title: "Until Black Women Are Free, None of Us Will Be Free",
      author: "Keeanga-Yamahtta Taylor",
      authorShort: "Taylor",
      tags: [
        "reprint",
        "essay",
        "anti-racism",
        "black feminism",
        "critical race theory",
      ],
      citation: `Hand, Jennifer. “Introduction: Keeanga-Yamahtta Taylor,” The Space Between Us: Writing Across Difference in the Crafts, edited by Jennifer Hand. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-5-6  `,
      url: "https://www.theMACRPapers/hand/taylor",
      component: <Taylor />,
    },
    {
      id: "leeandhand",
      order: 7,
      title:
        "Practice Makes Progress. A Comment Conversation on the Urban Glass Fall 2022 Feature, “Multilingualism: The Intersecting Art and Advocacy of Helen Lee” ",
      author: "Helen Lee and Jennifer Hand",
      authorShort: "Lee & Hand",
      tags: [
        "reprint",
        "commentary",
        "craft studies",
        "criticism",
        "education",
      ],
      citation: `Hand, Jennifer and Helen Lee. “Practice Makes Progress. A Comment Conversation on the Urban Glass Fall 2022 Feature, “Multilingualism: The Intersecting Art and Advocacy of Helen Lee,” in The Space Between Us: Writing Across Difference in the Crafts, edited by Jennifer Hand. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-5-6  `,
      url: "https://www.theMACRPapers/hand/leeandhand",
      component: <LeeAndHand />,
    },
    {
      id: "vowel",
      order: 8,
      title: "Writing Toward a Definition of Indigenous Futurism",
      author: "Chelsea Vowel",
      authorShort: "Vowel",
      tags: [
        "reprint",
        "essay",
        "imagined futures",
        "indigenous knowledge",
        "indigenous studies",
      ],
      citation: `Hand, Jennifer. “Introduction: Chelsea Vowel,” The Space Between Us: Writing Across Difference in the Crafts, edited by Jennifer Hand. The MACR Papers, Swannanoa, NC: MA in Critical Craft Studies, Warren Wilson College, 2023. Copyright remains with the author. ISBN 978-1-7351592-5-6  `,
      url: "https://www.theMACRPapers/hand/vowel",
      component: <Vowel />,
    },
  ],
  accent: "#0baeef",
  firstArticle: "foreword",
};

export default publication;
