const Coalesce = () => {
  return (
    <div>
      <p>
        This is the last cohort—the class of 2023—of the MACR program at the
        class of 2022 graduation ceremony. Eighteen days after meeting each
        other face to face for the first time, we coalesced around our studies
        and our circumstances.
      </p>

      <figure>
        <img src={process.env.PUBLIC_URL + "/img/tom/RT_7_coalesce1.jpg"} />
        <figcaption>
          The gang at the end-of-July residency, 2022. Photo: Beryl
          Perron-Feller
        </figcaption>
      </figure>

      <figure>
        <img src={process.env.PUBLIC_URL + "/img/tom/RT_7_coalesce2.jpg"} />
        <figcaption>
          The MACR 2023 cohort group hug/huddle at the class of 2022 graduation
          ceremony, 2022. Photo: Ben Lignel
        </figcaption>
      </figure>
      <hr />
    </div>
  );
};

export default Coalesce;
