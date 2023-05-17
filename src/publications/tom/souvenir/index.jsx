const Souvenir = () => {
  return (
    <div>
      <p>
        Calendars chronicle the social rituals and natural rhythms that bind us.
        They refer to the past while helping us forecast the future. The
        organizing structure of calendars is culturally constructed. They
        combine beliefs and information on a single page and represent how we
        think about and value time. They are journals of the mundane, a public
        look into private life, marking anniversaries, doctor visits, vacations,
        and paydays.
        <sup>
          <a href="#annotation-1">1</a>
        </sup>
      </p>

      <p>
        Susan Stewart says, “We do not need or desire souvenirs of events that
        are repeatable. Rather we need and desire souvenirs of events that are
        reportable, events whose materiality has escaped us, events that thereby
        exist only through the invention of narrative.”
        <sup>
          <a href="#annotation-1">1</a>
        </sup>
      </p>

      <p>
        A sexy firefighters calendar is a memorable souvenir of the first MACR
        in-person residency since the pandemic. It is the perfect way to recall
        director Namita Gupta Wiggers’s “tradition” of setting off the fire
        alarm while cooking during residencies—an unintentionally repeated
        action that makes for a great story, to Namita’s embarrassment and
        delight. We added notes and drawings to the calendar to make the mundane
        visible, create connections, and help remember a fleeting time when we
        were all together.
      </p>

      <figure>
        <img src={process.env.PUBLIC_URL + "/img/tom/RT_30_souvenir.png"} />
        <figcaption>
          Namita opening her end-of-residency present, July 2022. Photo: Rena
          Tom
        </figcaption>
      </figure>

      <h2>Further Readings</h2>
      <ul className="bibliography">
        <li>
          Stewart, Susan.{" "}
          <em>
            On Longing: Narratives of the Miniature, the Gigantic, the Souvenir,
            the Collection
          </em>
          . Durham, NC: Duke University Press, 1992.
        </li>
      </ul>

      <hr />

      <cite>
        <sup id="annotation-1">1.</sup> Susan Stewart,{" "}
        <em>
          On Longing: Narratives of the Miniature, the Gigantic, the Souvenir,
          the Collection
        </em>{" "}
        (Durham, NC: Duke University Press, 1992), 136.
      </cite>
    </div>
  );
};

export default Souvenir;
