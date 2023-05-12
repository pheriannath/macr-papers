import EditorNote from "./editornote";

const publication = {
  id: "dimassimo_weiss",
  author: "DiMassimo & Weiss",
  authorFull: "Jill DiMassimo & Joanna Weiss",
  name: "Reclaiming the Center: Making Way for Black Craft",
  articles: [
    {
      id: "editornote",
      order: "1",
      title: "Making Room, Making Connections, Making History: Editor's Note",
      author: "Jill DiMassimo & Joanna Weiss",
      tags: [
        "introduction",
        "new writing (student)",
        "craft studies",
        "black craftspeople",
        "archive",
        "erasure",
        "methodologies",
        "craft practice",
        "labor",
        "black history",
      ],
      citation: `DiMassimo, Jill and Joanna Weiss, "Making Room, Making Connections, Making History: Editors' Note," in Reclaiming the Center: Making Way for Black Craft, edited by Jill DiMassimo and Joanna Weiss. The MACR Papers, Swannanoa, NC: the MA in Critical Craft Studies, 2023. Copyright remains with the author. ISBN 978-1-7351592-3-2`,
      url: "www.macraftstudieswwc.com/theMACRPapers/dimassimo_weiss/editornote",
      component: <EditorNote />,
    },
  ],
  accent: "#ec008c",
};

export default publication;
