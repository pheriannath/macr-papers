const Hall = () => {
  return (
    <div>
      <p>
        Stuart Hall, a Jamaican-born British writer, academic and progressive,
        provides a sparkling poetic warm-up for the challenging journey through
        identity and responsibility in the readings ahead. Hall believed in “the
        politics of difference and the potentiality of achieving democratic
        socialism through a solidarity that unites different groups and
        individuals while valuing diversity.”
        <sup>
          <a href="#annotation-1">1</a>
        </sup>
        In “Minimal Selves,” Hall proffered the idea that “all identity is
        constructed across difference” while speaking to the experience of
        becoming an immigrant, becoming Black, and witnessing a postmodern
        marginalization of the colonizer in a new nomadic landscape. This brief,
        energizing, and poignantly autobiographical read sets the tone for the
        selections to come. Hall illustrates the fragility of the picket fences
        we erect around our identities, the futility of our attempts to dissect
        them, and the vital necessity of reaching across those self-imposed
        boundaries. For further exploration on layers of identities, see{" "}
        <a href="https://media.oregonstate.edu/media/t/0_wkv89qm9">
          Gloria Anzaldua’s 2004 lecture at Oregon State University
        </a>
        .
      </p>
      <ul className="bibliography">
        <li>
          Hall, Stuart. “Minimal Selves.” In The Real Me: Postmodernism and the
          Question of Identity, edited by Lisa Appignanesi. ICA Documents 6,
          London, ICA 1987.
        </li>
      </ul>

      <p>
        The article is being used with the kind permission of Catherine Hall /
        the Stuart Hall Foundation.
      </p>

      <p>
        <a
          href={
            process.env.PUBLIC_URL + `/img/hand/Jen_2.1_Hall_Minimal_Selves.pdf`
          }
        >
          Downloadable PDF Here
        </a>
      </p>

      <hr />
      <cite>
        <sup id="annotation-1">1.</sup> Helen Davis,{" "}
        <em>Understanding Stuart Hall</em> (Newbury Park: SAGE Publications,
        2004).
      </cite>
    </div>
  );
};

export default Hall;
