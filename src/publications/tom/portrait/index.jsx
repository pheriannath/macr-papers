const Portrait = () => {
  return (
    <div>
      <figure>
        <img src={process.env.PUBLIC_URL + "/img/tom/RT_22_portrait1.jpg"} />
        <figcaption>
          Portrait of Beryl Perron-Feller on break during MACR July residency,
          2022. Photo: Miriam Devlin
        </figcaption>
      </figure>

      <figure>
        <img src={process.env.PUBLIC_URL + "/img/tom/RT_22_portrait2.jpg"} />
        <figcaption>
          Portrait of Miriam Devlin on break during MACR July residency, 2022.
          Photo: Beryl Perron-Feller
        </figcaption>
      </figure>
      <hr />
    </div>
  );
};

export default Portrait;
