// src/Quote.js
import React from "react";

const Travel = ({destination,country,photo,distance}) => (
  <figure>
    <img src={photo} alt={destination} />
    <figcaption>
      <blockquote>"I went to {destination} in {country} which is {distance} from France !"</blockquote>
      <cite>"And it was supa cool!"</cite>
    </figcaption>
  </figure>
);

export default Travel;
