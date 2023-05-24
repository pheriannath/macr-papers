const Renewal = () => {
  return (
    <div>
      <figure>
        <img
          src={process.env.PUBLIC_URL + "/img/tom/RT_27_renewal.jpg"}
          alt="“Ise, old and new.” Photo: Bernhard Scheid"
        />
        <figcaption>
          “Ise, old and new.” Photo: Bernhard Scheid, retrieved from
          <a
            href="https://www.flickr.com/photos/bluntschli/10590068556/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.flickr.com/photos/bluntschli/10590068556/
          </a>
          , used under CC BY-NC 2.0 (
          <a
            href="https://creativecommons.org/licenses/by-nc/2.0/"
            target="_blank"
            rel="noreferrer"
          >
            https://creativecommons.org/licenses/by-nc/2.0/
          </a>
          )
        </figcaption>
      </figure>
      <p>
        Excerpts from “Ise Jingu and the Pyramid of Enabling Technologies,” by
        Brian Potter:
      </p>
      <p>
        Jingu is famous for its tradition of periodic reconstruction, known as
        Shikinen sengu, or simply sengu. Every 20 years exact copies of Naiku,
        Geku, and 14 other shrines are built on empty sites next to the existing
        structures, after which the old structures are torn down. Altogether 65
        buildings, bridges, fences, and other structures are rebuilt this way.
        This reconstruction at Jingu has taken place every 20 years (with some
        interruptions) for over 1,300 years, since the first sengu took place
        around 690 AD.
      </p>
      <p>…</p>
      <p>
        The techniques used to build Jingu depend on experience and expertise;
        learning them requires practice and feedback. Transferring the knowledge
        required to build the shrines can’t be done with words or text. The only
        way to pass it on is to create the conditions for someone to acquire it.
      </p>
      <p>…</p>
      <p>
        Because much of it can’t be written down or otherwise recorded, keeping
        process knowledge alive ultimately requires an institution: a stable
        pattern of social interaction that can persist beyond the life of any
        single person. An individual carpenter’s knowledge will be lost when the
        carpenter dies, but a carpenters guild can ensure there’s always a
        steady stream of new recruits to keep the craft alive.
      </p>
      <p>
        The more important it is that process knowledge gets retained, the
        stronger and more capable your institution needs to be—the more it needs
        to be able to push against changes in the surrounding cultural
        environment.
      </p>
      <h2>Further reading</h2>{" "}
      <ul className="bibliography">
        <li>
          Potter, Brian. “Ise Jingu and the Pyramid of Enabling Technologies.”
          The Prepared, June 30, 2021.{" "}
          <a
            href="https://theprepared.org/features-feed/ise-jingu-and-the-pyramid-of-enabling-technologies"
            target="_blank"
            rel="noreferrer"
          >
            https://theprepared.org/features-feed/ise-jingu-and-the-pyramid-of-enabling-technologies
          </a>
          .
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Renewal;
