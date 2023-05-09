import React from "react";
import Book from "../../assets/book.gif";

const Download = ({ url }) => {
  return (
    <a class="download-link" href={url || "#"}>
      <img src={Book} />
    </a>
  );
};

export default Download;
