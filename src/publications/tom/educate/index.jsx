const Educate = () => {
  return (
    <div>
      <p>
        At the July 2022 residency, learning happened whether the students were
        taught the course materials formally or whether they taught each other.
      </p>

      <figure>
        <img
          src={process.env.PUBLIC_URL + "/img/tom/RT_9_educate1.jpg"}
          alt="Trying to figure out Marx through a David Harvey lecture, aka the
          “lawn Marx” incident, 2022. Photo: Rena Tom"
        />
        <figcaption>
          Trying to figure out Marx through a David Harvey lecture, aka the
          “lawn Marx” incident, 2022. Photo: Rena Tom
        </figcaption>
      </figure>

      <figure>
        <div className="two-up">
          <img
            src={process.env.PUBLIC_URL + "/img/tom/RT_9_educate2.jpg"}
            alt="Indoor class, which was freezing, 2022."
          />
          <img
            src={process.env.PUBLIC_URL + "/img/tom/RT_9_educate3.jpg"}
            alt="Outdoor class, which was too
          sunny, 2022. Both were still better than Zoom."
          />
        </div>
        <figcaption>
          Indoor class, which was freezing, 2022. Outdoor class, which was too
          sunny, 2022. Both were still better than Zoom. Photos: Beryl
          Perron-Feller, Rena Tom
        </figcaption>
      </figure>

      <hr />
    </div>
  );
};

export default Educate;
