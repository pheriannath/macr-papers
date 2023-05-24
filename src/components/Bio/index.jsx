import React from "react";

const Bio = ({ bio }) => {
  const { id, name, text, photo, photoCredit } = bio;
  const bioHtml = text();

  return (
    <div id={id} className="bio">
      <img src={photo} alt={`${name}`} />
      <h3>{name}</h3>
      {bioHtml}
      <cite>Photo by {photoCredit}</cite>
    </div>
  );
};

export default Bio;
