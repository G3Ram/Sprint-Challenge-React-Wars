import React from "react";
import StarWarsCard from "./StarWarsCard";

function StartWarsList(props) {
  return (
    <div class="container">
      {props.characters.map((character, index) => (
        <StarWarsCard key={index} character={character} />
      ))}
    </div>
  );
}

export default StartWarsList;
