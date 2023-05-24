const Reframe = () => {
  return (
    <div>
      <p>
        Reframing craft is a constant activity in the MACR program. We are
        taught to defamiliarize ourselves from what we see and know by looking
        deeply. Lifting craft out of the everyday involves a change in
        perspective, one that MACR students and alumni forever after carry with
        them into the world.
      </p>

      <p>
        In an essay on visual ethnography written for Research Methods 3 class
        in fall 2022, I examine two photographs from the Instagram feed of
        artist Tiffanie Turner, who creates realistically detailed paper
        flowers:
      </p>

      <p>
        “A paper bouquet (figure 1) is unusual but still recognizable as flowers
        in a vase; its aesthetic value depends on my knowledge of how they are
        part of my everyday. A different reaction occurs when I consider the
        giant flower in figure 2. As outlined by Yuriko Saito in her thinking
        about the aesthetics of everyday objects, my encounter with such an
        unlikely and artificial flower upsets its usual ordinariness and lifts
        it out of the everyday. While I am still able to have an aesthetic
        experience with the flower, it is founded on its strangeness. Saito
        elaborates, ‘In order for this [routine and ordinary] aspect of our life
        to be foregrounded as the object of aesthetics, it has to be illuminated
        in some way to render it out-of-the-ordinary, unfamiliar, or strange: it
        needs to be defamiliarized.’”
        <sup>
          <a href="#annotation-1">1</a>
        </sup>
      </p>

      <h2>Further Readings</h2>
      <ul className="bibliography">
        <li>
          Saito, Yuriko. “The Aesthetics of the Ordinary and Familiar.”{" "}
          <en>In Aesthetics of the Familiar: Everyday Life and World-Making</en>
          , 9–36. Oxford, UK: Oxford University Press, 2017.
        </li>
      </ul>

      <figure>
        <img
          src={process.env.PUBLIC_URL + "/img/tom/RT_26_reframe1.png"}
          alt="Figure 1. Bouquet of artificially decaying paper flowers, 2022. Photo:
          Tiffanie Turner"
        />
        <figcaption>
          Figure 1. Bouquet of artificially decaying paper flowers, 2022. Photo:
          Tiffanie Turner
        </figcaption>
      </figure>

      <figure>
        <img
          src={process.env.PUBLIC_URL + "/img/tom/RT_26_reframe2.jpg"}
          alt="Tiffanie Turner is dwarfed by a very large paper flower, 2014. Photo:
          Sarah Deragon/Portraits to the People"
        />
        <figcaption>
          Tiffanie Turner is dwarfed by a very large paper flower, 2014. Photo:
          Sarah Deragon/Portraits to the People
        </figcaption>
      </figure>

      <hr />
      <cite>
        <sup id="annotation-1">1.</sup> Yuriko Saito, “The Aesthetics of the
        Ordinary and Familiar,” in{" "}
        <em>Aesthetics of the Familiar: Everyday Life and World-Making</em>{" "}
        (Oxford, UK: Oxford University Press, 2017), 11.
      </cite>
    </div>
  );
};

export default Reframe;
