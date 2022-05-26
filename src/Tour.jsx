import React from "react";

function Tour({ name, price, image, info }) {
  // console.log(name, price);
  return (
    <div className="tour-card">
      <img src={image} alt={name} />
      <h2>{name}</h2>
      <p>${price}</p>
      <p>{info}</p>
    </div>
  );
}

export default Tour;
