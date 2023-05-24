import React from "react";
import Bio from "../Bio";
import { BIOS } from "../../data/bios";

const Bios = () => {
  return (
    <div>
      <h2>Contributor Bios</h2>
      <div className="bio-grid">
        {BIOS.sort((a, b) => {
          if (a.id < b.id) return -1;
          if (a.id > b.id) return 1;
          return 0;
        }).map((bio, i) => (
          <Bio key={i} bio={bio} />
        ))}
      </div>
    </div>
  );
};

export default Bios;
