import React from "react";
import { getAllTags } from "../../publications";

const Keywords = () => {
  const tagList = getAllTags();

  return (
    <div>
      <h2>Keywords</h2>
      <ul>
        {tagList.map((tag) => (
          <li>{tag}</li>
        ))}
      </ul>
    </div>
  );
};

export default Keywords;
