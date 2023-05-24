const Taylor = () => {
  return (
    <div>
      <p>
        In 1977, the Combahee River Collective published a manifesto that began
        with the following statement: We are a collective of Black feminists who
        have been meeting together since 1974. During that time we have been
        involved in the process of defining and clarifying our politics, while
        at the same time doing political work within our own group and in
        coalition with other progressive organizations and movements. The most
        general statement of our politics at the present time would be that we
        are actively committed to struggling against racial, sexual,
        heterosexual, and class oppression, and see as our particular task the
        development of integrated analysis and practice based upon the fact that
        the major systems of oppression are interlocking. The synthesis of these
        oppressions creates the conditions of our lives. As Black women we see
        Black feminism as the logical political movement to combat the manifold
        and simultaneous oppressions that all women of color face.
        <sup>
          <a href="#annotation-1">1</a>
        </sup>
      </p>
      <p>
        This was the formative moment of one of the foundational groups
        dedicated to defining and advocating for intersectional Black feminism
        to supplant the white feminist theory still dominant in the 1970s.
        Keeanga-Yamahtta Taylor’s <em>How We Get Free</em>, a profile of the
        work and women of Combahee, is a short and illuminating book. This{" "}
        <em>New Yorker</em> feature, based on that book, distills the
        collective’s message to introduce an even wider audience to their
        campaign of action across intersecting identities. Taylor introduces
        Barbara Smith, whose leadership of the collective is documented in{" "}
        <em>How We Get Free</em>, and whose dedication to working across lines
        of difference to make meaningful change has manifested in the forms of
        activism, publishing, and scholarship. For further reading on Black
        feminism by Barbara Smith, turn to{" "}
        <em>Toward a Black Feminist Criticism</em>; for more on Combahee, pick
        up a copy of <em>How We Get Free</em>.
      </p>
      <ul className="bibliography">
        <li>
          Taylor, Keeanga-Yamahtta. “Until Black Women Are Free, None of Us Will
          Be Free.” <em>The New Yorker</em>, July 20, 2020.{" "}
          <a
            href="https://www.newyorker.com/news/our-columnists/until-black-women-are-free-none-of-us-will-be-free"
            target="_blank"
            rel="noreferrer"
          >
            https://www.newyorker.com/news/our-columnists/until-black-women-are-free-none-of-us-will-be-free
          </a>
          .
        </li>
      </ul>
      <p>
        The article is being used with the kind permission of the author. It was
        originally published in the <em>New Yorker</em>.
      </p>
      <p>
        <a
          href={
            process.env.PUBLIC_URL +
            `/img/hand/Jen_6_Taylor_Until_Black_Women_Are_Free_None_Of_Us_Will_Be_Free.pdf`
          }
        >
          Downloadable PDF Here
        </a>
      </p>
      <hr />
      <cite>
        <sup id="annotation-1">1.</sup> The Combahee River Collective Statement,
        United States, 2015, web archive,{" "}
        <a
          href="https://www.loc.gov/item/lcwaN0028151/"
          target="_blank"
          rel="noreferrer"
        >
          https://www.loc.gov/item/lcwaN0028151/
        </a>
        .
      </cite>
    </div>
  );
};

export default Taylor;
