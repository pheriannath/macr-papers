const Ahmed = () => {
  return (
    <div>
      <p>
        In “A Phenomenology of Whiteness,” Ahmed frames and defines whiteness as
        a culture, not the culture—as in the culture which forms and informs the
        assumptions dominant in western society, like the ones I made when
        structuring my interview and feature of Joyce J. Scott. Ahmed, a
        self-proclaimed Feminist Killjoy and prolific author on the
        intersections of race and gender, is “concerned with how bodies and
        worlds take shape; and how power is secured and challenged in everyday
        life worlds as well as institutional cultures.”
        <sup>
          <a href="#annotation-1">1</a>
        </sup>{" "}
        Our identities do not exist in a vacuum but are formed in and around the
        institutions, cultures, and structures of power that Ahmed critiques.
        Calling back to Hall’s assertion that all identities are constructed
        across difference, this text reinforces “the fact that every identity is
        placed, positioned, in a language, a culture, a history.”
        <sup>
          <a href="#annotation-2">2</a>
        </sup>{" "}
        I, too, am someone’s “other,” and Ahmed’s contribution spurs
        contemplation of the sometimes jarring thought that our experience is
        not universal, but specific and unique to each of us, as it is to any
        other subject. For further reading, see Adrien Piper’s “The Triple
        Negation of Colored Women Artists.”
        <sup>
          <a href="#annotation-3">3</a>
        </sup>
      </p>

      <ul className="bibliography">
        <li>
          Ahmed, Sara. “A Phenomenology of Whiteness.” <em>Feminist Theory</em>{" "}
          8, no. 2 (2007): 149–168.{" "}
          <a href="https://doi.org/10.1177/1464700107078139" target="_blank">
            https://doi.org/10.1177/1464700107078139
          </a>
          .
        </li>
      </ul>

      <p>
        <strong>Editor's note:</strong> Sage is unable to grant permission to
        openly post an article online.
      </p>

      <figure>
        <img
          src={process.env.PUBLIC_URL + "/img/hand/Jen_4_Ahmed_annotated.jpg"}
        />
      </figure>

      <hr />
      <cite>
        <sup id="annotation-1">1.</sup> “Bio,” on Sarah Ahmed’s website,
        accessed November 3, 2022,{" "}
        <a href="https://www.saranahmed.com/bio-cv" target="_blank">
          <em>https://www.saranahmed.com/bio-cv</em>
        </a>
        .
      </cite>
      <cite>
        <sup id="annotation-2">2.</sup> Stuart Hall, “Minimal Selves,” in Lisa
        Appignanesi, ed.,{" "}
        <em>The Real Me: Postmodernism and the Question of Identity</em> (ICA
        Documents 6. London: The Institute of Contemporary Arts, 1987), 46.{" "}
        <a
          href="http://site.ufvjm.edu.br/mpich/files/2013/04/HALL-Minimal-Selves.pdf"
          target="_blank"
        >
          http://site.ufvjm.edu.br/mpich/files/2013/04/HALL-Minimal-Selves.pdf
        </a>
        .
      </cite>
      <cite>
        <sup id="annotation-3">3.</sup> Adrian Piper, “The Triple Negation of
        Colored Women Artists,” In{" "}
        <em>Next Generation: Southern Black Aesthetic</em> (Winston-Salem, NC:
        Southeastern Center for Contemporary Art, 1990), 15-22.
      </cite>
    </div>
  );
};

export default Ahmed;
