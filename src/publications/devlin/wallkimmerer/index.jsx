const WallKimmerer = () => {
  return (
    <div>
      <p>
        Robin Wall Kimmerer is a biologist and author. In this chapter from the
        2013 book Braiding Sweetgrass, she describes practicalities of the craft
        of basket-making as taught by Potawatomi basket-maker John Pigeon, and
        provides ecological and social context for the practice. Her account
        draws from a variety of natural-craft and biology lineages, while
        analyzing them.
      </p>
      <ul className="bibliography">
        <li>
          Wall Kimmerer, Robin. “Wisgaak Gokpenagen: A Black Ash Basket.” In
          <em>Braiding Sweetgrass</em>, 141-155. Minneapolis: Milkweed Editions,
          2013.{" "}
        </li>
      </ul>
      <p>
        <strong>Editor’s note</strong>: Permission to reproduce this article, or
        provide a PDF version of it, is pending. Please check again soon!
      </p>

      <figure>
        <img
          src={process.env.PUBLIC_URL + "/img/devlin/IMG_Miriam_2_Kimmerer.jpg"}
        />
      </figure>
      <hr />
    </div>
  );
};

export default WallKimmerer;
