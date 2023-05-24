const Joyce = () => {
  return (
    <div>
      <p>
        Before deciding to apply for the MACR program, I was a regular
        contributor to the Glass Art Society’s quarterly, <em>GASnews</em>, and
        my local museum’s publications. Even before the summer of 2020, GAS’s
        editorial focus had been shifting to ensure more equitable
        representation, but the Summer 2020 issue provided an important
        opportunity to directly address the continuing lack of accessibility and
        accountability in our field. In looking for a subject to center a
        feature on galleries responding to this shift, I landed on the thought
        of interviewing the phenomenally talented, and very well established,
        Joyce Scott. Scott, a MacArthur Fellow, was generous with her time and
        thoughts. Our hours-long conversation gave me more than enough material
        for my <em>GASnews</em> feature, so I pitched a piece about Scott to the
        museum communications team, which they readily welcomed. For both
        platforms, I crafted serviceable portraits outlining Scott’s practice
        and trajectory. In hindsight, I realize that this was, in fact, the easy
        button for me. Not only had I reached for a safe subject rather than
        looking for an artist who could benefit from the platform, I also let my
        assumptions about Scott’s background guide the formation of my interview
        questions. At one point, I asked Scott about issues of white
        appropriation of Black culture, confident her answer would result in a
        slam-dunk soundbite about social responsibility. Scott’s swift rebuke
        that I hadn’t done my research or I would have known she regularly made
        work with Buddhist iconography was as sharp as it was hilarious. She
        gave me an unexpected earful on the dangers of cultural silos, and a
        potent reminder to question my preconceived notions.
      </p>
      <p>
        Scott’s vast and multifaceted practice is a product of an identity as a
        craftsperson, daughter, world traveler, scholar, performer, provocateur,
        and proud Black woman. My focus on that last piece of her identity, the
        point of greatest departure from my own, obstructed my potential to see
        our similarities, and through them the endless connections and
        curiosities to be explored in her work. Still thrilled with the
        opportunity to have spent time with a legendary figure in my field, I
        can now stand back and critically assess what I could have done to push
        past surface-level journalism and into the messy tangle of sameness,
        otherness, universality, and uniqueness that reveals deeper and more
        compelling truths.
      </p>
      <p>
        Reprinted with permission from Jennifer Hand / The Chrysler Museum of
        Art.
      </p>

      <ul className="bibliography">
        <li>
          Jennifer Hand, “Joyce Scott: Hard Truth in Beauty,” Chrysler Museum of
          Art, October 7, 2020,{" "}
          <a
            href="https://chrysler.org/joyce-scott-hard-truth-in-beauty/"
            target="_blank"
            rel="noreferrer"
          >
            https://chrysler.org/joyce-scott-hard-truth-in-beauty/
          </a>
          .
        </li>
      </ul>

      <p>
        <a
          href={
            process.env.PUBLIC_URL +
            `/img/hand/Jen_3.1_Hand_Joyce_Scott_ Hard_Truth_in_Beauty.pdf`
          }
        >
          Downloadable PDF Here
        </a>
      </p>
      <hr />
    </div>
  );
};

export default Joyce;
