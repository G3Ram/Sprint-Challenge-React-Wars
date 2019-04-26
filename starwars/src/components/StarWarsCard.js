import React from "react";
import "./StarWars.css";

function StarWarsCard(props) {
  return (
    <div class="card">
      <p className="cardText">Name: {props.character.name}</p>
      <p className="cardText">Height: {props.character.height}</p>
      <p className="cardText">Hair color: {props.character.hair_color}</p>
      <p className="cardText">Birth year: {props.character.birth_year}</p>
      <p className="cardText">Gender: {props.character.gender}</p>
    </div>
  );
}
export default StarWarsCard;
