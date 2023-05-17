const Map = () => {
  return (
    <div>
      <p>
        “Humans do not simply record geographies, they create them. The map is
        not an artifact, but rather something that continues to expand and
        unfold. Counter-mapping strategies often target absences and omissions
        within the hegemonic knowledge systems of historically created maps.
        Simultaneously, they allow for the creation of intersections between
        material and cultural extraction. Counter-mapping processes make it
        clear to viewers that physical maps function as representations of
        virtual and temporal spaces whose structural and bordered compositions
        do not actually exist. Maps document spaces of memory and cultural
        delineation as created by humans, whose borders are only articulated
        through intermediary space and objects.”
        <sup>
          <a href="#annotation-1">1</a>
        </sup>
      </p>

      <p>
        I sketched the following notes during the January 2022 residency with a
        goal to “map the presence of craft” for a five-minute presentation in
        Materials Lab class, keeping publics and counterpublics in mind. I
        thought about the many layers of people, history, and craft evidence
        near a major intersection near my home in Berkeley, California.
      </p>

      <figure>
        <img src={process.env.PUBLIC_URL + "/img/tom/RT_18_map1.png"} />
        <figcaption>
          A screenshot of notes taken before and after Rena Tom’s walk around
          the neighborhood, 2022.
        </figcaption>
      </figure>

      <figure>
        <img src={process.env.PUBLIC_URL + "/img/tom/RT_18_map2.png"} />
        <figcaption>
          A screenshot of notes taken before and after Rena Tom’s walk around
          the neighborhood, 2022.
        </figcaption>
      </figure>

      <h2>Further Readings</h2>
      <ul className="bibliography">
        <li>
          Larson, Ellen. “Counter-Mapping as Display: Unfolding, Revealing, and
          Concealing Intermediary Spaces.”{" "}
          <em>Hemisphere: Visual Cultures of the Americas</em> 13, no. 1
          (October 25, 2020): 5–19.
        </li>
      </ul>

      <hr />
      <cite>
        <sup id="annotation-1">1.</sup> Ellen Larson, “Counter-Mapping as
        Display: Unfolding, Revealing, and Concealing Intermediary Spaces,”{" "}
        <em>Hemisphere: Visual Cultures of the Americas</em> 13, no. 1 (October
        25, 2020): 6.
      </cite>
    </div>
  );
};

export default Map;
