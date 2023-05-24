const Offering = () => {
  return (
    <div>
      <p>
        Excerpts from “Bidding Fashionable Farewell to the Dead,” by Phoebe
        Cheng:
      </p>

      <p>
        Welcome to one of Hong Kong’s most modern <em>ming zhi pu</em>, or ghost
        money shops, where Chinese shoppers regularly buy paper gifts to burn
        for dead loved ones to use in the afterlife.
      </p>

      <p>…</p>

      <p>
        For Hong Kong shoppers, Au Yeung’s store does stand out. His trendy
        works have already attracted the attention of people with relatives who
        died at a young age.
      </p>

      <p>
        The store receives several orders from customers who want custom-made
        effigies of fashionable items, including cell phones and accessories.
      </p>

      <p>…</p>

      <p>
        “I have to make the paper effigies exactly according to the requests of
        my clients,” he said, explaining that a customer once asked him to make
        a specific Sony notebook computer. “He insisted on Sony, so I had to
        produce a paper handicraft that was exactly the same.”
      </p>

      <p>
        Clients have also been known to order dishes from famous restaurants,
        such as black pepper chicken wings and sour and spicy pork rice noodles
        from Tam Kee, a popular Hong Kong eatery. “When I get an order like
        that, I’m in trouble,” admitted Au Yeung. “I can’t eat spicy food.”
      </p>

      <p>
        To make the effigy as accurate as he could, he had no choice but to buy
        the dish and imitate its appearance—and as he did not want to waste the
        food, he had to eat the spicy rice noodles himself.
      </p>

      <p>“It was so spicy I almost called an ambulance,” he joked.</p>

      <p>
        He admitted he treats his job as seriously as a surgeon, putting his
        heart and mind into every creation. “If I fail to make an effigy that
        looks like the real thing, I’d be in trouble,” said the craftsman, who
        eventually sold the paper spicy noodles for about HK$400 ($50).
      </p>

      <p>
        “I not only need to please the customer but also the person who is
        receiving the gift in the afterlife,” he added.
      </p>

      <h2>Further Readings</h2>

      <ul className="bibliography">
        <li>
          Cheng, Phoebe. “Bidding Fashionable Farewell to the Dead.”{" "}
          <em>China Daily</em>. October 21, 2010, sec. Society.{" "}
          <a
            href="https://www.chinadaily.com.cn/china/2010-10/21/content_11437013.htm"
            target="_blank"
          >
            https://www.chinadaily.com.cn/china/2010-10/21/content_11437013.htm
          </a>
          .
        </li>
      </ul>

      <figure>
        <img
          src={process.env.PUBLIC_URL + "/img/tom/RT_20_offering.jpg"}
          alt="Paper roast pig and poultry, 2016. Photo: Kubla khanD - Own work, CC
          BY-SA 4.0"
        />
        <figcaption>
          Paper roast pig and poultry, 2016. Photo: Kubla khanD - Own work, CC
          BY-SA 4.0,{" "}
          <a
            href="https://commons.wikimedia.org/w/index.php?curid=47751096"
            target="_blank"
          >
            https://commons.wikimedia.org/w/index.php?curid=47751096
          </a>
        </figcaption>
      </figure>

      <figure>
        <img
          src={process.env.PUBLIC_URL + "/img/tom/RT_20_offering2.jpg"}
          alt="Paper mansion in a Hong Kong shop, 2008. Photo: VictoriaDFong - Own
          work, CC BY-SA 3.0"
        />
        <figcaption>
          Paper mansion in a Hong Kong shop, 2008. Photo: VictoriaDFong - Own
          work, CC BY-SA 3.0,{" "}
          <a
            href="https://commons.wikimedia.org/w/index.php?curid=4581000"
            target="_blank"
          >
            https://commons.wikimedia.org/w/index.php?curid=4581000
          </a>
        </figcaption>
      </figure>
      <hr />
    </div>
  );
};

export default Offering;
