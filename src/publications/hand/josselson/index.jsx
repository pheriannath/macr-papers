const Josselson = () => {
  return (
    <div>
      <p>
        Swinging wide out of the field of arts and culture and into the realm of
        psychology, this next text comes from clinical psychologist Ruthellen
        Josselson. “On Writing Other People’s Lives” examines the discomfort and
        difficulty of writing and being written about across difference and the
        power dynamics therein. Josselson’s background in ethics and narrative
        studies raises a question that few think to ask: What is the effect on
        someone of being written about? Her take on the subject is a tool with a
        wide application, from building arguments for the veneration of
        Indigenous narrative knowledge to understanding the role of interviews
        in art practice as per scholar and frequent MACR collaborator Linda
        Sandino. Josselson acknowledges that in western culture, “written events
        gain a substantiality above that carried by memory or speech,”
        amplifying the importance of care in the process of interviewing as well
        as the selection and usage of the words that will make up the written
        document that the world encounters. For further reading on relationships
        and ethics, find a copy of Josselson’s{" "}
        <em>
          The Space between Us: Exploring the Dimensions of Human Relationships
        </em>
        .
      </p>
      <ul className="bibliography">
        <li>
          Josselson, Ruthellen. “On Writing Other People’s Lives: Self-analytic
          Reflections of a Narrative Researcher.” In{" "}
          <em>Ethics and Process in the Narrative Study of Lives</em>, edited by
          Ruthellen Josselson, 60–71. New York: Sage Publications, 1996.{" "}
          <a
            href="https://doi.org/10.4135/9781483345451.n5"
            target="_blank"
            rel="noreferrer"
          >
            https://doi.org/10.4135/9781483345451.n5
          </a>
        </li>
      </ul>

      <p>
        <strong>Editor's note:</strong> Sage is unable to grant permission to
        openly post an article online.
      </p>

      <figure>
        <img
          src={
            process.env.PUBLIC_URL + "/img/hand/Jen_5_Josselson_Annotated.jpg"
          }
        />
      </figure>
      <hr />
    </div>
  );
};

export default Josselson;
