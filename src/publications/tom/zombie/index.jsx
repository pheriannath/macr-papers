const Zombie = () => {
  return (
    <div>
      <p>
        “What both Dawn of the Dead and Shaun of the Dead remind us is that it
        is possible to be locked into a kind of repetitive life where there is
        not much difference between you and a walking corpse. In Shaun, it is
        played for laughs as the characters don’t realize they’re dealing with
        zombies, everything looks so familiar to them: teenagers banging their
        heads to their Walkman, the girl working at her grocery checkout job,
        just doing the same repetitive things. One of the spiritual lessons we
        can carry from the zombie is that they remind us to be mindful of the
        present moment. If you want to be better than a living corpse, here are
        some things you might change.”
        <sup>
          <a href="#annotation-1">1</a>
        </sup>
      </p>

      <figure>
        <img src={process.env.PUBLIC_URL + "/img/tom/RT_34_zombie.png"} />
        <figcaption>
          Zombie residence in Berkeley, California. Photo: Rena Tom
        </figcaption>
      </figure>

      <h2>Further Readings</h2>
      <ul className="bibliography">
        <li>
          McCormack, J. W.. “Actually, Zombies Are Good.” <em>Vice</em> (blog),
          June 20, 2017.
          <a href="https://www.vice.com/en/article/vbgnpj/actually-zombies-are-good">
            https://www.vice.com/en/article/vbgnpj/actually-zombies-are-good
          </a>
          .
        </li>
      </ul>

      <hr />

      <cite>
        <sup id="annotation-1">1.</sup> Greg Garrett, quoted in J. W. McCormack,
        “Actually Zombies Are Good,” <em>Vice</em> (blog) June 20, 2017,
        https://www.vice.com/en/article/vbgnpj/actually-zombies-are-good.
      </cite>
    </div>
  );
};

export default Zombie;
