import React from "react";
import Tour from "./Tour";

function Tours({ tours }) {
  return (
    <div>
      <div className="tours">
        <h1>Tours Explorer</h1>
        <div className="tour-info">
          {tours.map((tour) => {
            return <Tour key={tour.id} {...tours} />;
          })}
        </div>
      </div>
    </div>
  );
}

export default Tours;
