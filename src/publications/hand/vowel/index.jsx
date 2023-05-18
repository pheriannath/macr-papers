const Vowel = () => {
  return (
    <div>
      <p>
        Finally, one last look at the tools we use to do this work. As Métis
        scholar and activist Chelsea Vowel reminds us, “language is not merely a
        tool of communication, but also a place where reality can be shaped.
        Language is transformational.” Metis Scholar and Activist Chelsea Vowel
        is a Cree language instructor at the University of Alberta, as well as a
        writer and parent. Her intersecting interests of Native studies and
        sci-fi provide a unique perspective on how our responsibility to the
        archive must shape the words we choose in writing it. Like Ruthellen
        Josselson, Vowel honors the importance of stories in the construction of
        our identities. Like Combahee, who dared to imagine a society where
        interlocking oppressions were a source of alliance rather than division,
        Vowel argues that “uncovering Black/Indigenous presence in the past,
        then asserting our existence in the present and into the future[,] can
        be a way of seeing into, or even making, better futures.”
      </p>
      <ul className="bibliography">
        <li>
          Vowel, Chelsea. “Writing Toward a Definition of Indigenous Futurism.”
          <em>Lit Hub</em> (June 20, 2022).
          <a href="https://lithub.com/writing-toward-a-definition-of-indigenous-futurism/">
            https://lithub.com/writing-toward-a-definition-of-indigenous-futurism/
          </a>
          .
        </li>
      </ul>
      <p>
        Permission to reproduce this article, or provide a PDF version of it, is
        pending. Please check again soon!
      </p>
      <figure>
        <img
          src={process.env.PUBLIC_URL + "/img/hand/Jen_8_Vowel_Annotated.jpg"}
        />
      </figure>
      <hr />
    </div>
  );
};

export default Vowel;
