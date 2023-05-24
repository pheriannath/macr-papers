const Boden = () => {
  return (
    <div>
      <p>
        Margaret Boden is a cognitive scientist and social psychologist who
        published the following essay in 2000. Her analysis of craftwork finds
        that the materials enact our perceptions, and invite—or maybe compel—us
        into the movement of use.
      </p>
      <ul className="bibliography">
        <li>
          Boden, Margaret A.. “Crafts, Perception, and the Possibilities of the
          Body.” In <em>The British Journal of Aesthetics</em>. 40, no. 3
          (2000): 289–301.{" "}
          <a
            href="https://doi.org/10.1093/bjaesthetics/40.3.289"
            target="_blank"
            rel="noreferrer"
          >
            https://doi.org/10.1093/bjaesthetics/40.3.289
          </a>
        </li>
      </ul>
      <p>
        <strong>Editor’s note</strong>: Permission to reproduce this article has
        not been granted by the publisher.
      </p>

      <figure>
        <img
          src={process.env.PUBLIC_URL + "/img/devlin/IMG_Miriam_8_Boden.jpg"}
        />
      </figure>
      <hr />
    </div>
  );
};

export default Boden;
