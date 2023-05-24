const Evolve = () => {
  return (
    <div>
      <p>
        My final practicum project has changed drastically over time. Every
        couple of months, I write down keywords from my notes, cut them up, and
        rearrange them. The first set of images represent my research at its
        widest point, in April 2022, and centers concepts of absence and
        presence and exhibitionary practices.
      </p>

      <figure>
        <div className="two-up">
          <img
            src={process.env.PUBLIC_URL + "/img/tom/RT_11_evolve1.jpg"}
            alt="My time-honored method: cut up paper and rearrange words all over the
          rug, April 2022. Photos: Rena Tom"
          />
          <img
            src={process.env.PUBLIC_URL + "/img/tom/RT_11_evolve2.jpg"}
            alt="My time-honored method: cut up paper and rearrange words all over the
          rug, April 2022. Photos: Rena Tom"
          />
        </div>
        <figcaption>
          My time-honored method: cut up paper and rearrange words all over the
          rug, April 2022. Photos: Rena Tom
        </figcaption>
      </figure>

      <p>
        The version from August 2022 shows a change of focus toward loss. While
        a lot of previous nodes have been pushed aside or reprioritized, looking
        at these word clouds over time informs me that the core of my interests
        remains, fortunately, pretty steady. “Absence,” “gaps,” and “discomfort”
        carry over, but they are now surrounded by words that describe
        sensations and feelings.
      </p>

      <figure>
        <div className="two-up">
          <img
            src={process.env.PUBLIC_URL + "/img/tom/RT_11_evolve3.jpg"}
            alt="Refining ideas on a new rug, this time with sticky notes, August 2022.
          Photos: Rena Tom"
          />
          <img
            src={process.env.PUBLIC_URL + "/img/tom/RT_11_evolve4.jpg"}
            alt="Refining ideas on a new rug, this time with sticky notes, August 2022.
          Photos: Rena Tom"
          />
        </div>
        <figcaption>
          Refining ideas on a new rug, this time with sticky notes, August 2022.
          Photos: Rena Tom
        </figcaption>
      </figure>
      <hr />
    </div>
  );
};

export default Evolve;
