const PerronFeller = () => {
  return (
    <div>
      <p>
        Going to the Mars Hill Anderson Rosenwald School with Dr. Momon was a
        highlight of our summer 2022 residency, because after being invigorated
        by studying the history of Black craft with her for a whole semester,
        doing fieldwork and being in one of the places that we were learning
        about was especially meaningful. When I rehydrated the clay soil that
        was still abundant around the schoolhouse in my hands, I realized how
        resourceful Charity Hazard, who taught pottery at this school, was in
        her role as an educator. By using material from the school’s literal
        ground, she was able to teach her students not just how to do ceramics,
        but where the clay itself comes from. Being able to experience such a
        place in person, witness how abundant the clay soil still was, and see
        the heaps of spent coal likely used to heat the school brought history
        into the present, further aiding the connection I felt to Hazard and her
        students.
      </p>
      <figure>
        <img
          src={
            process.env.PUBLIC_URL +
            "/img/dimassimo-weiss/IMG_J_J_5.2_1_ClaySoil.jpg"
          }
        />
        <figcaption>
          Clay soil at the Mars Hill Anderson Rosenwald School, Mars Hill, North
          Carolina, July 2022. Photo: Beryl Perron-Feller.
        </figcaption>
      </figure>
      <figure>
        <img
          src={
            process.env.PUBLIC_URL +
            "/img/dimassimo-weiss/IMG_J_J_5.2_2_SoilHand.png"
          }
        />
        <figcaption>
          Dry clay soil in hand at the Mars Hill Anderson Rosenwald School, Mars
          Hill, North Carolina, July 2022. Photo: Beryl Perron-Feller.
        </figcaption>
      </figure>
      <figure>
        <img
          src={
            process.env.PUBLIC_URL +
            "/img/dimassimo-weiss/IMG_J_J_5.2_3_MuddyHand.png"
          }
        />
        <figcaption>
          Clay soil reconstituted with water from a water bottle at the Mars
          Hill Anderson Rosenwald School, Mars Hill, North Carolina, July 2022.
          Photo: Beryl Perron-Feller.
        </figcaption>
      </figure>
      <hr />
    </div>
  );
};

export default PerronFeller;
