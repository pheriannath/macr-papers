const Magic = () => {
  return (
    <div>
      <p>
        Magicians offer lessons in “a general aesthetics of the impossible.”
        They create perceptual uncertainty, losing and finding things to prove
        that absence is an illusion. We like magic because we like the idea that
        nothing ever really goes away.
        <sup>
          <a href="#annotation-1">1</a>
        </sup>
      </p>
      <figure>
        <img src={process.env.PUBLIC_URL + "/img/tom/RT_17_magic.jpg"} />
        <figcaption>
          The beginning of a little legerdemain by Shlomo Zippel. Photo: Rena
          Tom
        </figcaption>
      </figure>

      <p>
        <iframe
          width="560"
          height="315"
          src="https://www.youtube.com/embed/wlsHPJz5Has"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </p>

      <h2>Further Readings</h2>
      <ul className="bibliography">
        <li>
          Leddington, Jason. “The Experience of Magic.”{" "}
          <em>The Journal of Aesthetics and Art Criticism</em> 74, no. 3 (2016):
          253–64.
        </li>
      </ul>
      <hr />
      <cite>
        <sup id="annotation-1">1.</sup> Jason Leddington, “The Experience of
        Magic,” <em>The Journal of Aesthetics and Art Criticism</em> 74, no. 3
        (2016): 254.
      </cite>
    </div>
  );
};

export default Magic;
