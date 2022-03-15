export class Character {
  constructor(name, gender, height, mass, hair_color, pictureUrl) {
    this.name = name;
    this.gender = gender;
    this.height = height;
    this.mass = mass;
    this.hair_color = hair_color;
    this.pictureUrl = pictureUrl;
  }

  compareWeight(another_character) {
    return this.mass - another_character.mass;
  }

  compareHeight(another_character) {
    return this.height - another_character.height;
  }

  compareHairColor(another_character) {
    return this.hair_color === another_character.hair_color;
  }

  compareGender(another_character) {
  return this.gender === another_character.gender;
  }
}