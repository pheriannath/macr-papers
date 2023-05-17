const Memorial = () => {
  return (
    <div>
      <p>
        “In the garden, memory flows uncertainly from prosthetics such as paths
        laid by dead fathers, photographs of childhood gardens, or spades handed
        down through generations. Of particular resonance in the garden are
        plant memorials. Using a plant to memorialize underscores the transience
        of life, memory, and presence, as plants can become detached from the
        object they memorialize over time, or can themselves die, grow into new
        shapes, or become nuisances.”
        <sup>
          <a href="#annotation-1">1</a>
        </sup>
      </p>

      <p>
        My sister took dozens of tiny jade cuttings and planted them to hand out
        at our dad’s memorial. Dad liked to garden and was good at it; I
        remember the jade bushes in front of my childhood home growing out of
        control. When I go outside and sit on my porch steps, I stare at Dad’s
        plant. I know I need to replant it, it’s drying up and the pot is too
        small, but I’m afraid to touch it for some reason. Nevertheless, I
        always say “hi.”
      </p>

      <figure>
        <img src={process.env.PUBLIC_URL + "/img/tom/RT_19_memorial.jpg"} />
        <figcaption>
          Dad’s plant before repotting and a good soaking, 2022. Photo: Rena Tom
        </figcaption>
      </figure>

      <h2>Further Readings</h2>
      <ul className="bibliography">
        <li>
          Ginn, Franklin. “Death, Absence and Afterlife in the Garden.”{" "}
          <em>Cultural Geographies</em> 21, no. 2 (2014): 229–45.
        </li>
      </ul>
      <hr />
      <cite>
        <sup id="annotation-1">1.</sup> Franklin Ginn, “Death, Absence and
        Afterlife in the Garden,” <em>Cultural Geographies</em> 21, no. 2
        (2014): 232.
      </cite>
    </div>
  );
};

export default Memorial;
