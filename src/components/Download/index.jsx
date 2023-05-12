import React from "react";
import Book from "../../assets/book.gif";

const Download = ({ url }) => {
  return (
    <a className="download-link" href={url || "#"}>
      <img src={Book} />
    </a>
  );
};

export default Download;
