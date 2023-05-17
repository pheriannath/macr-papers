const Talisman = () => {
  return (
    <div>
      <blockquote>
        <p className="center italic">
          There is no her here.
          <br />
          Diet Cokes go undrunk in the fraying shade,
          <br />
          Of summer days lolling uninterested <br />
          As ants in aspartame.
        </p>
      </blockquote>

      <p>
        My mother is dying of Alzheimer’s. When she passes, she will be the
        sixth family member lost to a memory disorder. For each of these loved
        ones, I’ve painted a small memento mori based on the simple moments and
        associations I miss most. Tiny Emporium-Capwell tags and books of stamps
        and grape jelly lids and souvenir spoons and Abba-Zaba wrappers.
        Hers—the first and most sentimental of the collection—is a Diet Coke
        bottle cap. Holding it reminds me of summer. Childhood Julys in the
        backyard and the Saddest July when we whisked her away to the memory
        care facility in Oregon.
      </p>

      <p>
        This summer I left this painting of a bottle cap in her backyard, for it
        has been rendered on papier-mâché embedded with forget-me-not seeds.
        Designed to be watered, to dissolve, to sprout, and to blossom; with
        each tiny leaf and flower it captures my memories of those long-gone
        Coca-Cola Julys.{" "}
      </p>

      <p>
        <a href="http://www.kaseysmith.net/memory-seed-bombs">
          http://www.kaseysmith.net/memory-seed-bombs
        </a>
      </p>

      <figure>
        <img src={process.env.PUBLIC_URL + "/img/tom/RT_33_bottlecap.jpg"} />
        <figcaption>
          Sprouting Diet Coke bottle cap seed bomb, 2022. Photo: Kasey Smith.
        </figcaption>
      </figure>

      <hr />
    </div>
  );
};

export default Talisman;
