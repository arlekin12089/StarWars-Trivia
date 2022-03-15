import { Character } from "../scripts/character.js";
import { getCharacter } from "../scripts/data.js";

let charactersWrap = document.querySelector(".characters-wrap");
let selectBtn = document.querySelector(".selectBtn");
let character_one_select = document.getElementById("character_one");
let character_second_select = document.getElementById("character_second");
let character_item_first = document.querySelector(".character-item-first");
let character_item_second = document.querySelector(".character-item-second");
let message = document.querySelector(".message");

function showCharacter(character, anotherChar, container) {
  let character_info = container.querySelector(".character_info");
  let character_img = container.querySelector(".character_img img");
  if (character === undefined) {
    character_info.style.display = "none";
    character_img.src = "images/anonymous.jpg";
  } else {
    character_info.style.display = "block";
    let massElem = container.querySelector(".massElem");
    massElem.innerHTML = `${character.mass}`;
    let heightElem = container.querySelector(".heightElem");
    heightElem.innerHTML = `${character.height}`;
    let hair_colorElem = container.querySelector(".hair_colorElem");
    hair_colorElem.innerHTML = `${character.hair_color}`;
    let genderElem = container.querySelector(".genderElem");
    genderElem.innerHTML = `${character.gender}`;
    let characterNameElem = container.querySelector(".character_name");
    characterNameElem.innerHTML = `${character.name}`;
    character_img.src = `${character.pictureUrl}`;
    container.querySelector(".weightBtn").addEventListener("click", () => {
      let diff_weight = character.compareWeight(anotherChar);
      if (diff_weight > 0) {
        character > anotherChar;
        message.innerHTML = `${character.name} (${character.mass} kg) weights more than ${anotherChar.name} (${
          anotherChar.mass
        } kg).The difference is ${Math.abs(diff_weight)} kg.`;
      } else if (diff_weight < 0) {
        message.innerHTML = `${character.name} (${character.mass} kg) weights less than ${anotherChar.name} (${
          anotherChar.mass
        } kg). 
		The difference is ${Math.abs(diff_weight)} kg.`;
      } else {
        message.innerHTML = `${anotherChar.name} (${anotherChar.mass} kg) and ${character.name} (${character.mass} kg) weight the same!`;
      }
    });
    container.querySelector(".heightBtn").addEventListener("click", () => {
      let diff_height = character.compareHeight(anotherChar);
      if (diff_height > 0) {
        character > anotherChar;
        message.innerHTML = `${character.name} height (${character.height} cm) is more than ${anotherChar.name} (${
          anotherChar.height
        } cm). 
		 The difference is ${Math.abs(diff_height)} cm.`;
      } else if (diff_height < 0) {
        message.innerHTML = `${character.name} (${character.height} cm)  height is less than ${anotherChar.name} (${
          anotherChar.height
        } cm). 
		 The difference is ${Math.abs(diff_height)} cm.`;
      } else {
        message.innerHTML = `${anotherChar.name}(${anotherChar.height} cm) and ${character.name} (${character.height} cm) height the same!.`;
      }
    });
    container.querySelector(".hair_colorBtn").addEventListener("click", () => {
      let hair_selection = character.compareHairColor(anotherChar);
      if (hair_selection) {
        message.innerHTML = `${character.name} and ${anotherChar.name} have the same color ${character.hair_color}.`;
      } else {
        message.innerHTML = `We have different hair color! ${character.name} has ${character.hair_color} color and ${anotherChar.name} has ${anotherChar.hair_color} color.`;
      }
    });
    container.querySelector(".genderBtn").addEventListener("click", () => {
      let gender_selection = character.compareGender(anotherChar);
      if (gender_selection) {
        message.innerHTML = `${character.name} and ${anotherChar.name} have the same gender - ${character.gender}.`;
      } else {
        message.innerHTML = `We have different gender! ${character.name} has ${character.gender}
  gender and ${anotherChar.name} has ${anotherChar.gender} gender.`;
      }
    });
  }
}

selectBtn.addEventListener("click", async () => {
  let characterOneVal = character_one_select.value;
  let characterSecondVal = character_second_select.value;

  if (characterOneVal !== "none" && characterSecondVal !== "none") {
    if (characterOneVal === characterSecondVal) {
      message.innerHTML = "You have chosen the same character!";
    } else {
      message.innerHTML = "";
    }
    let character_1 = await getCharacter(characterOneVal);
    let character_2 = await getCharacter(characterSecondVal);
    showCharacter(character_1, character_2, character_item_first);
    showCharacter(character_2, character_1, character_item_second);
  } else {
    message.innerHTML = "Please, select your character!";
  }
});
