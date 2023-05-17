const Ancestry = () => {
  return (
    <div>
      <p>
        This diagram makes visible the people and entities who have influenced
        my journey to who I am today—that is, the person who created this
        encyclopedia—from when I first considered craft as an entry point into a
        community. The Switchboards was a mid-2000s forum for women running
        craft-related businesses. R.D. is Rare Device, the store and gallery I
        used to own and operate with Lisa Congdon. MSS is Makeshift Society, a
        creative coworking space I ran with Bryan Boyer.
      </p>

      <figure>
        <img src={process.env.PUBLIC_URL + "/img/tom/RT_4_ancestry.png"} />
        <figcaption>
          Rena Tom, <em>Conceptual Self-Portrait</em>, 2023. Photo: Rena Tom
        </figcaption>
      </figure>
      <hr />
    </div>
  );
};

export default Ancestry;
