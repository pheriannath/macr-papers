const Enchant = () => {
  return (
    <div>
      <p>
        “Commemorative sites that exude phenomenological qualities of stability,
        permanence, endurance, and perpetual care may soothe sensations of
        impermanence, virginity, and decay. The volatility of collective memory
        is spatially denied and time is suspended.
      </p>

      <p>
        For many bereaved individuals, the fear and pain of loss can fade, and
        some may eventually transcend the experience of traumatic death.
        Pilgrimages to sites of death may begin to reenchant memories rather
        than incite unbearable pain. Release from grief is cyclical, not linear.
        The bereaved often abandon their belief in the solidity of life and the
        permanence of things once taken for granted. For them, the landscape is
        not a durable entity but a reflection of the shared mutability of
        landscape and of life.”
        <sup>
          <a href="#annotation-1">1</a>
        </sup>
      </p>

      <p>
        <em>Editor’s note:</em> This roadside memorial is included in my
        practicum project about embodied encounters with crafted memorial
        objects.
      </p>

      <h2>Further Readings</h2>
      <ul className="bibliography">
        <li>
          Baptist, Karen Wilson. “Reenchanting Memorial Landscapes: Lessons from
          the Roadside.” Landscape Journal 32, no. 1 (2013): 35–50.
        </li>
      </ul>

      <figure>
        <img src={process.env.PUBLIC_URL + "/img/tom/RT_10_enchant.jpg"} />
        <figcaption>
          Roadside memorial on Adeline Street for James “JT” Street, a long-time
          City of Berkeley employee, 2022. Photo: Rena Tom
        </figcaption>
      </figure>

      <hr />
      <cite>
        <sup>1.</sup> Karen Wilson Baptist, “Reenchanting Memorial Landscapes:
        Lessons from the Roadside,” <em>Landscape Journal</em> 32, no. 1 (2013):
        45.
      </cite>
    </div>
  );
};

export default Enchant;
