import React, { useState } from "react";

function Tour({ id, name, price, image, info, removeTour }) {
  // console.log(name, price);
  const [readMore, setReadMore] = useState();

  return (
    <div
      className="tour-card"
      style={{ borderBottom: "1px solid black", marginBottom: "20px" }}
    >
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <p>
        {readMore ? info : `${info.substring(0, 100)}...`}
        <button onClick={() => setReadMore(!readMore)}>
          {readMore ? "Show Less" : "Read More"}
        </button>
      </p>
      <button onClick={() => removeTour(id)}>Not interested</button>
    </div>
  );
}

export default Tour;
