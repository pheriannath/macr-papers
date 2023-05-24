const Legacy = () => {
  return (
    <div>
      <p>
        This is a transcript of an audio recording made as part of{" "}
        <a href="https://renatom.net/Into-the-Breach">Into the Breach</a>, a
        mapping assignment for the author’s Material Lab 2 class.
      </p>

      <h2>My Visit to Tepco Beach</h2>
      <p>
        Tepco Beach is accessed down a fire road, behind a Costco and a waste
        treatment plant in Richmond, California. When I arrive in the late
        afternoon, nobody is around but seagulls and some ducks. The road slopes
        to the water, which I smell before I can see, and, just past boulders
        and broken concrete, there are ceramics everywhere.
      </p>

      <p>
        Tepco was a company in nearby El Cerrito that made basic dinnerware with
        cheerful patterns in the 1930s–1960s. The factory workers used to take
        broken stock and dump it into the water at Point Isobel, which is the
        actual name of the area.
      </p>

      <p>
        The pieces are surprisingly large, and I spend time guessing what was a
        plate versus a mug or a bowl. They are mostly sun-bleached, but there is
        less fading higher up where they are in the shade. I happen to be there
        at low tide; the porcelain that lives below the waterline is stained
        green with growth, so bright that I think it is painted. Ceramics,
        rocks, and mussel shells all blend together and look alike, pressed into
        the mud. It’s very exciting to find a shard with their wordmark on it,
        or a tacky bit of pattern.
      </p>

      <p>
        While the clay on this beach will never return to its original state, it
        serves a purpose to remind people of the area’s manufacturing roots.
        This is in drastic contrast to the Costco across the street that might
        not carry any local products at all.
      </p>

      <audio controls>
        <source
          src={process.env.PUBLIC_URL + "/img/tom/RT_14_legacy.mp3"}
          type="audio/mpeg"
        />
        Your browser does not support the audio element.
      </audio>

      <figure>
        <img
          src={process.env.PUBLIC_URL + "/img/tom/RT_14_legacy1.jpg"}
          alt="Logomark on a shard from Tepco Beach, Richmond, California, 2022.
          Photo: Rena Tom"
        />
        <figcaption>
          Logomark on a shard from Tepco Beach, Richmond, California, 2022.
          Photo: Rena Tom
        </figcaption>
      </figure>

      <figure>
        <img
          src={process.env.PUBLIC_URL + "/img/tom/RT_14_legacy2.jpg"}
          alt="A mysterious pattern on a shard at Tepco Beach, Richmond, California,
          2022. Photo: Rena Tom"
        />
        <figcaption>
          A mysterious pattern on a shard at Tepco Beach, Richmond, California,
          2022. Photo: Rena Tom
        </figcaption>
      </figure>

      <hr />
    </div>
  );
};

export default Legacy;
