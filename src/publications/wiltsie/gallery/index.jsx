import { NavLink } from "react-router-dom";

const Gallery = () => {
  return (
    <div>
      <p>
        I was first drawn to the idea of researching the two-dimensional
        representations of craft on the surface of three-dimensional craft
        objects after encountering multiple examples within the same book, which
        then led me to search for more of the same. I was astounded by what I
        found. Searching for visual trends between craft objects and identifying
        commonalities in style, technique, or imagery is one of my favorite
        things about craft research. I like to dig deep and follow threads of
        connection across boundaries of both geography and time. Much as W. J.
        T. Mitchell assembled his “Metapictures Atlas” to demonstrate the
        breadth and depth of his category of metapictures, I wanted to seek out
        as many examples as I could of “craft on craft,” looking for both
        historical and contemporary pieces. To conduct this search, I turned to
        the Critical Craft Forum community on Facebook with a request for
        suggestions of artists or places to look, and a call for any craft
        artists to submit their own work if they felt it applied. I also looked
        to art history books and online museum collections to gather historical
        examples, and Instagram to seek out contemporary artists. It was during
        this process that the project really pivoted from “Craft on Craft” to
        “Pots on Pots.” This is not to imply that there were no examples of this
        type of work in other craft media. On the contrary, there were many
        fantastic pieces that I initially intended to include in this gallery.
        However, I could no longer ignore the fact that ceramic objects
        displaying the image of ceramic forms greatly outnumbered any of the
        other media categories. I chose to present this gallery in a random
        order that allows contemporary and historical work to intermingle,
        revealing visual connections between them and the evolution of
        decorative motifs and craft forms. The range is vast: from as old as a
        vase from Ancient Greece to as new as a mug made this year; originating
        in Japan, China, Germany, England, the US, and beyond; referencing
        historical forms, the material culture of its time, domestic spaces, or
        the artist’s personal studio practice. The iconic form of a ceramic
        vessel is sometimes depicted in great detail and other times shown only
        in silhouette, but in all instances is immediately recognizable. In the
        next section, I speak with three of the artists who I encountered during
        this search that utilize the timeless ceramic form as a central part of
        their studio practice.
      </p>
      <p>I would like to give special thanks to: </p>
      <ul className="thanks">
        <li>
          <em>
            The Critical Craft Forum community (
            <a
              href="https://www.facebook.com/groups/310882667610"
              target="_blank"
              rel="noreferrer"
            >
              https://www.facebook.com/groups/310882667610
            </a>
            )
          </em>
        </li>
        <li>
          <em>
            Ayumi Horie’s “Pots in Action” Instagram project (
            <a
              href="https://www.instagram.com/potsinaction/"
              target="_blank"
              rel="noreferrer"
            >
              @potsinaction
            </a>
            ), which had a week of “Pots on Pots” (see:{" "}
            <a
              href="https://www.instagram.com/explore/tags/piapotsonpots/"
              target="_blank"
              rel="noreferrer"
            >
              #piapotsonpots
            </a>
            )
          </em>
        </li>
        <li>
          <em>
            Kristen Kieffer’s “Non-Clay Pots” Instagram project (
            <a
              href="https://www.instagram.com/nonclaypots/"
              target="_blank"
              rel="noreferrer"
            >
              @nonclaypots
            </a>
            )
          </em>
        </li>
      </ul>

      <p>Tina Wiltsie</p>

      <p>*</p>

      <div className="gallery">
        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL + "/img/wiltsie/Tina_3.1_Delft_plate.jpg"
              }
            />
            <figcaption>
              Charger, Delft, ca. 1750–1775
              <br />
              Earthenware, tin glaze, 14” diameter
              <br />
              Rijksmuseum, Amsterdam
              <br />
              <a
                href="http://hdl.handle.net/10934/RM0001.COLLECT.233827"
                target="_blank"
                rel="noreferrer"
              >
                http://hdl.handle.net/10934/RM0001.COLLECT.233827
              </a>
            </figcaption>
          </figure>
          <p>
            This Delft-made dish reflects the Dutch enthusiasm for collecting
            and displaying porcelain pieces during the eighteenth century. In
            the center of the design is a five-piece garniture set of vases and
            jars (likely either Chinese or Japanese made), surrounded by various
            other household objects. The pieces are not shown in any particular
            setting but are arranged on a solid yellow ground. Compare the
            depiction style between this plate and <em>Dutch Treat Plate</em>,
            by Walter Ostrom.
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/wiltsie/Tina_3.2_Ostrom_plate.jpg"
              }
            />
            <figcaption>
              Walter Ostrom, <em>Dutch Treat Plate</em>, ca. 2004
              <br />
              Glazed earthenware, on-glaze decoration
              <br />
              1 5/16” x 10 7/8” x 10 7/8”
              <br />
              Gardiner Museum, Toronto. Gift of the Ostrom Family, G22.2.1
              <br />
              Image courtesy of the Gardiner Museum, used with permission{" "}
              <a
                href="https://emuseum.gardinermuseum.com/objects/9377/"
                target="_blank"
                rel="noreferrer"
              >
                https://emuseum.gardinermuseum.com/objects/9377/
              </a>
            </figcaption>
          </figure>
          <p>
            Good Earth: The Pots and Passion of Walter Ostrom In his work,
            Canadian artist Walter Ostrom is known for incorporating imagery
            inspired by ceramics history, such as this brightly colored plate
            that shows four vessel forms with different decorative scenes. The
            shape on the bottom is particularly interesting as a double
            reference, with a flower vase and teapot depicted inside the jar.
            Elsewhere in this publication, Mariko Paterson cites Ostrom’s work
            as influential to hers (in the interview “
            <NavLink to="/wiltsie/artistpanel">History Surrounds Us</NavLink>”
            ), and the catalog for his retrospective exhibition,{" "}
            <em>Good Earth: The Pots and Passion of Walter Ostrom</em>, is
            listed as a suggested reading in the final section, “Gathering Raw
            Materials.”
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/wiltsie/Tina_3.3_Nabeshima_plate.jpeg"
              }
            />
            <figcaption>
              Dish with Three Jars, Japan, 1680–1690s
              <br />
              Porcelain with underglaze blue and overglaze polychrome enamels
              (Hizen ware, Nabeshima type)
              <br />
              Height, 1.625”; diameter, 6” <br />
              Metropolitan Museum of Art, New York{" "}
              <a
                href="https://www.metmuseum.org/art/collection/search/50342"
                target="_blank"
                rel="noreferrer"
              >
                https://www.metmuseum.org/art/collection/search/50342
              </a>
            </figcaption>
          </figure>
          <p>
            This Nabeshima porcelain plate was what initially sparked my
            interest in the depiction of ceramic vessels on the ceramic surface.
            The plate itself is rather small and shows the image of three jars
            arranged in a group and depicted on a neutral cobalt ground. Each of
            the jars appears to be treated as a flat shape, with a disconnect
            between the expansive patterns that fill the outlines and the volume
            of the round forms that they represent. The patterns reference other
            decorative ceramic styles of the Hizen region (modern-day Saga and
            Nagasaki prefectures).{" "}
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL + "/img/wiltsie/Tina_3.4_Kangxi_vase.png"
              }
            />
            <figcaption>
              Vase, China, Qing Dynasty, Kangxi period (1662–1722)
              <br />
              Porcelain painted in <em>famille noire</em> enamels
              <br />
              18.625” x 5.75” x 5.75”; diameter of rim, 4.5”
              <br />
              Metropolitan Museum of Art, New York{" "}
              <a
                href="https://www.metmuseum.org/art/collection/search/48605"
                target="_blank"
                rel="noreferrer"
              >
                https://www.metmuseum.org/art/collection/search/48605
              </a>
            </figcaption>
          </figure>
          <p>
            Depictions of ceramic antiquities and flower arrangements were
            common motifs in Ming and Qing Dynasty porcelain. This tall vase
            shows multiple groupings of ceramic vessels in and other auspicious
            symbols in different forms and decorative styles. Some of the
            objects are arranged on tables or stands, while others appear to be
            floating in a blank space. Notice the depiction style of the
            patterning on the vases in contrast to the Nabeshima jars on the
            previous plate.
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/wiltsie/Tina_3.5_Felicity_Aylieff.jpeg"
              }
            />
            <figcaption>
              Felicity Aylieff, <em>18 Vase Still Life</em>, 2009
              <br />
              Glazed porcelain, fencai enamels, hand painted
              <br />
              57.5” x 30” x 30” <br />
              Image courtesy of the artist, used with permission
            </figcaption>
          </figure>
          <p>
            U.K. artist Felicity Aylieff is known for her large-scale sculptural
            ceramics—especially monumental porcelain vessels such as this
            one—which she makes in her studio in Jingdezhen, China, where she
            collaborates with local porcelain factories. This piece, decorated
            in the Chinese <em>fencai</em> enameling technique (often called “
            <em>famille rose</em>” in the West), is covered with overlapping
            representations of Chinese porcelain vases. Compare the vessels on
            this piece to those on the vase in the preceding image.{" "}
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/wiltsie/Tina_3.6_Sometsuke_bottle.jpg"
              }
            />
            <figcaption>
              Square Bottle with Figures in a Landscape, a Flower Vase, and a
              Flowering Plant near a Rock, Japan, 1670–1690
              <br />
              Porcelain, glaze, cobalt
              <br />
              10.9” x 4.6” x 4.4”; diameter of rim, 7”
              <br />
              Rijksmuseum, Amsterdam{" "}
              <a
                href="http://hdl.handle.net/10934/RM0001.COLLECT.3498"
                target="_blank"
                rel="noreferrer"
              >
                http://hdl.handle.net/10934/RM0001.COLLECT.3498
              </a>
            </figcaption>
          </figure>
          <p>
            This square-shaped bottle is an example of Japanese porcelain that
            was exported to Europe during the late seventeenth century, most
            likely through the Dutch East India Trading Company. Using cobalt
            blue underglaze to emulate the Chinese blue-and-white style, this
            bottle depicts a double-gourd-shaped vase containing the image of a
            figure standing under a tree, possibly holding a fan.{" "}
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL + "/img/wiltsie/Tina_3.7_Imari_plate.png"
              }
            />
            <figcaption>
              Plate with Vase and Flowers, Japan, ca. 1700
              <br />
              Porcelain painted with colored enamels over a transparent glaze
              (Hizen ware, Imari type)
              <br />
              Height 3” x diameter 17.5” <br />
              Metropolitan Museum of Art, New York{" "}
              <a
                href="https://www.metmuseum.org/art/collection/search/46093"
                target="_blank"
                rel="noreferrer"
              >
                https://www.metmuseum.org/art/collection/search/46093
              </a>
            </figcaption>
          </figure>
          <p>
            This plate is decorated in the <em>kinrande</em> overglaze enamel
            style, which Japanese artisans developed during the later years of
            the seventeenth century specifically for products intended to export
            to Europe. The design seen here, showing a ceramic vase in the
            center of an elaborately decorated circular frame, evolved from a
            Chinese motif that showed a woven flower basket and was later
            reinterpreted by European manufacturers. My Practicum project
            focused on objects like this one, analyzing and reframing their
            interpretation in online museum collections.
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={process.env.PUBLIC_URL + "/img/wiltsie/Tina_3.8_Iznik.jpg"}
            />
            <figcaption>
              Iznik Plate with Depiction of an Ewer, Turkish, late sixteenth
              century
              <br />
              Fritware, with underglaze decoration
              <br /> Height 2.25” x diameter 12”
              <br /> Walters Art Museum, Baltimore{" "}
              <a
                href="https://art.thewalters.org/detail/11790/iznik-rhodian-fritware-plate-with-depiction-of-a-ewer/"
                target="_blank"
                rel="noreferrer"
              >
                https://art.thewalters.org/detail/11790/iznik-rhodian-fritware-plate-with-depiction-of-a-ewer/
              </a>
            </figcaption>
          </figure>
          <p>
            This Turkish plate shows a design that looks strikingly similar to
            the same Chinese blue-and-white porcelain objects that influenced
            the motif found on the Imari plate in the previous image. Rather
            than showing a flower vase or basket, however, this plate depicts
            the distinctive form of an Iznik ewer, elaborately decorated to the
            point that it almost blends in with the surrounding pattern. China
            exported porcelain to both countries during the Early Modern period,
            so it is possible that these two plates show variations of the same
            original design, newly interpreted in local styles.{" "}
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/wiltsie/Tina_3.9_Gabrilell_Schaffner_green_plate.jpeg"
              }
            />
            <figcaption>
              Gabrielle Schaffner,{" "}
              <em>Bowl with an Ancient Roman Vase and a Bird in Vines</em>, 2022
              <br />
              Slab-built porcelain, underglazes, clear satin glaze
              <br />
              Height 5.5” x diameter 11.5” <br />
              Image courtesy of the artist, used with permission
            </figcaption>
          </figure>
          <p>
            This contemporary piece, by artist Gabrielle Schaffner, shows a
            historic Roman vase surrounded by foliage in a central composition
            similar to the previous two plates in this gallery. The vase is
            rendered with details of an owl (which connects visually to the bird
            atop the vessel) and finely painted lines that indicate the
            characteristic patterns of Roman pottery.{" "}
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/wiltsie/Tina_3.10_Julia_Walther_teapot.jpg"
              }
            />
            <figcaption>
              Julia Walther, <em>Cactus Memento Mori Teapot</em>, 2020
              <br />
              Porcelain, glaze, 22k gold luster
              <br />
              6” x 9” x 6”
              <br />
              Image courtesy of the artist, used with permission
            </figcaption>
          </figure>
          <p>
            This teapot by Julia Walther is made in a very contemporary style,
            with rich gold luster decorations of cactuses, “memento mori”
            skulls, and an ancient Greek water jug. The form of the historic
            vessel is rendered in a simple silhouette, with minimal sgraffito
            patterning, yet it is immediately recognizable for what it is.{" "}
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/wiltsie/Tina_3.11_Greek_Hydria.jpeg"
              }
            />
            <figcaption>
              Attributed to the Class of Hamburg, Terracotta Hydria (Water Jar),
              Greek, ca. 510–500 BCE
              <br />
              Terracotta, black-figure
              <br />
              Height, 14.75” <br />
              Metropolitan Museum of Art, New York
              <a
                href="https://www.metmuseum.org/art/collection/search/247244"
                target="_blank"
                rel="noreferrer"
              >
                https://www.metmuseum.org/art/collection/search/247244
              </a>
            </figcaption>
          </figure>
          <p>
            This Greek <em>hydria</em> shows a group of women gathered at a
            public fountain, carrying <em>hydriai</em> to fill with water. Here,
            as well, the simple silhouette of the iconic vessel form is
            immediately recognizable while also referencing the form of the
            object itself. Archeologist Jenifer Neils writes about a jar very
            similar to this one in her essay “Vases on Vases,” where she
            proposes various interpretations of the black-figure fountain scene
            (for more on this essay, see the final section of this publication,
            “Gathering Raw Materials”).{" "}
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/wiltsie/Tina_3.12_Brooke_Millecchia.jpeg"
              }
            />
            <figcaption>
              Brooke Millecchia, <em>Cups on Cups Series</em>, 2018
              <br />
              White stoneware with underglaze and glaze application, cone 6,
              oxidation
              <br />
              4.5” x 4” x 4” <br />
              Image courtesy of the artist, used with permission
            </figcaption>
          </figure>
          <p>
            In this mug, artist Brooke Millecchia likewise uses a silhouette
            approach to depiction, but does so in a domestic setting, showing
            stacks of mugs and teacups in precariously balanced towers. The
            solid black forms of the vessels stand out in contrast to the
            negative shape of a pouring teapot, which shows a simple
            representation of a floral decoration.{" "}
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/wiltsie/Tina_3.13_Kate_Schroeder.jpeg"
              }
            />
            <figcaption>
              Kate Schroeder, <em>Studio Shelfie Mug</em>, 2022
              <br />
              Stoneware, porcelain, nichrome, glaze, underglaze
              <br />
              Approx. 16 oz
              <br />
              Image courtesy of the artist, used with permission
            </figcaption>
          </figure>
          <p>
            Contemporary artist Kate Schroeder is known for her <em>Shelfie</em>{" "}
            series, honoring our emotional connection to objects through
            depicting the contents of people’s shelves, often in domestic
            settings. Here, she offers a “snapshot” of her own shelves in her
            ceramic studio, showing the outlines of various vessels waiting to
            be fired. An attached sculpture of a kiln acts as the mug’s handle
            and contains miniature versions of her work.{" "}
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/wiltsie/Tina_3.14_Greek_kylix.jpeg"
              }
            />
            <figcaption>
              Terracotta Kylix (Drinking Cup), signed by Epiktetos, Greek, ca.
              510 BCE
              <br />
              Terracotta, red-figure
              <br />
              Height, 2.4” <br />
              Metropolitan Museum of Art, New York{" "}
              <a
                href="https://www.metmuseum.org/art/collection/search/255631"
                target="_blank"
                rel="noreferrer"
              >
                https://www.metmuseum.org/art/collection/search/255631
              </a>
            </figcaption>
          </figure>
          <p>
            This Greek <em>kylix</em> (drinking cup) is another example of an
            artist referencing their own work in the surface depiction. The
            painter Epiktetos specialized in drinking vessels of this type and
            emphasizes this expertise in the presentation of the large{" "}
            <em>skyphos</em> (deep drinking cup) balanced on the figure’s arm in
            contrast to the small <em>oinochoe</em> (jug) in his other hand.{" "}
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/wiltsie/Tina_3.15_Julia_Walther_plate.jpg"
              }
            />
            <figcaption>
              Julia Walther, <em>Still Life Plate</em>, 2018
              <br />
              Stoneware, underglaze
              <br />
              1” x 6” x 6”
              <br />
              Image courtesy of the artist, used with permission
            </figcaption>
          </figure>
          <p>
            This collection of dishes by artist Julia Walther shows a different
            depiction style than the gilded silhouette that we see in her other
            work in this gallery. Here, she uses the negative shapes of the
            iconic ceramic forms against a brightly colored ground, then adds
            painted linear details to illustrate the surface patterns. Walther
            enjoys playing with imagined interpretations of historical forms and
            decorative styles, using historical references as a starting point
            while allowing her own memory to influence the final image
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/wiltsie/Tina_3.16_Moche_bottle.jpeg"
              }
            />
            <figcaption>
              Bird Bottle, Moche, Peru, seventh¬ to eighth century
              <br />
              Ceramic, slip
              <br />
              Height, 8.6” x diameter 6.5”
              <br />
              Metropolitan Museum of Art, New York{" "}
              <a
                href="https://www.metmuseum.org/art/collection/search/308514"
                target="_blank"
                rel="noreferrer"
              >
                https://www.metmuseum.org/art/collection/search/308514
              </a>
            </figcaption>
          </figure>
          <p>
            This clay bottle, made by the Moche civilization near modern-day
            Peru, depicts a bird drinking out of a bowl. The bowl is decorated
            with patterns that are also common to work from this time and
            mirrors the linear slip decoration that covers the rest of the form.
            Compare the hand-drawn style to other, more contemporary, work in
            this gallery.{" "}
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/wiltsie/Tina_3.17_Gabriell_Schaffner_small_dishes.JPG"
              }
            />
            <figcaption>
              Gabrielle Schaffner, <em>Small Dishes</em>, 2022
              <br />
              Slab-built and pinched porcelain, underglazes, some with clear
              satin glaze, some unglazed
              <br />
              Various sizes
              <br />
              Image courtesy of the artist, used with permission
            </figcaption>
          </figure>
          <p>
            This collection of small dishes shows a small range of work by
            artist Gabrielle Schaffner depicting various vessel forms.
            Schaffner’s work is heavily influenced by nature, archeology, art
            history, and design; she uses a combination of underglaze painting
            and sgraffito techniques to illustrate iconic vessel forms ranging
            from an ancient Greek amphora to a contemporary espresso pot.{" "}
          </p>
        </div>

        <div className="gallery-item">
          <figure>
            <img
              src={
                process.env.PUBLIC_URL +
                "/img/wiltsie/Tina_3.18_Maya_vessel.jpg"
              }
            />
            <figcaption>
              Cylinder Vessel with Mythological Drinking Scene, Guatemala,
              Petén, Maya, 600–900 CE
              <br />
              Slip-painted ceramic
              <br />
              Height 9.5” x diameter 7.5”
              <br />
              Los Angeles County Museum of Art, Los Angeles{" "}
              <a
                href="https://collections.lacma.org/node/2259194"
                target="_blank"
                rel="noreferrer"
              >
                https://collections.lacma.org/node/2259194
              </a>
            </figcaption>
          </figure>
          <p></p>
        </div>
      </div>

      <p>*</p>

      <p>
        Images from the Metropolitan Museum of Art, Rijksmuseum, Walters Art
        Museum, and Los Angeles County Museum of Art are all in the public
        domain and made available courtesy of those museums’ Open Access
        policies.{" "}
      </p>

      <ul className="thanks">
        <li>
          <a
            href="https://www.felicityaylieff.com/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.felicityaylieff.com/
          </a>
        </li>
        <li>
          <a
            href="https://www.gabrielleschaffnerceramics.com/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.gabrielleschaffnerceramics.com/
          </a>
        </li>
        <li>
          <a
            href="https://www.juliawalther.com/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.juliawalther.com/
          </a>
        </li>
        <li>
          <a
            href="http://www.brookemillecchia.com/"
            target="_blank"
            rel="noreferrer"
          >
            http://www.brookemillecchia.com/
          </a>
        </li>
        <li>
          <a
            href="https://www.kateschroederceramics.com/"
            target="_blank"
            rel="noreferrer"
          >
            https://www.kateschroederceramics.com/
          </a>
        </li>
      </ul>
      <hr />
    </div>
  );
};

export default Gallery;
