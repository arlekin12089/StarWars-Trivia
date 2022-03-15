import { Character } from "../scripts/character.js";
export async function getCharacter(character_name) {
  let charactersImages = {
    "Luke Skywalker": "images/Luke_Skywalker.jpg",
    "C-3PO": "images/C-3PO.jpg",
    "R2-D2": "images/R2-D2.jpg",
    "Darth Vader": "images/Darth_Vader.jpg",
    Chewbacca: "images/Chewbacca.jpg",
    "Han Solo": "images/Han_Solo.jpg",
    Yoda: "images/Yoda.jpg",
    "Leia Organa": "images/Leia_Organa.jpg",
  };
  let characterResponse = await fetch(`https://swapi.dev/api/people/?search=${character_name}`);
  const character = await characterResponse.json();
  return new Character(
    character.results[0].name,
    character.results[0].gender,
    parseInt(character.results[0].height),
    parseInt(character.results[0].mass),
    character.results[0].hair_color,
    charactersImages[character.results[0].name]
  );
}