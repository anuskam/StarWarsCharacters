import { ICharacter } from '../interfaces/ICharacter.interface';
import { IPlanetsVisited } from '../interfaces/IPlanetsVisited.interface';

export class Character implements ICharacter {
  id: number;
  galactic_registration: number;
  name: string;
  species: string;
  languages: number;
  wars: number;
  defenses: number;
  image: string;
  headline: string;
  comment: string;
  weight: number;
  height: number;
  planets_visited: IPlanetsVisited[];

  constructor(character: ICharacter) {
    this.id = character.id;
    this.galactic_registration = character.galactic_registration;
    this.name = character.name;
    this.species = character.species;
    this.languages = character.languages;
    this.wars = character.wars;
    this.defenses = character.defenses;
    this.image = character.image;
    this.headline = character.headline;
    this.comment = character.comment;
    this.weight = character.weight;
    this.height = character.height;
    this.planets_visited = character.planets_visited;
  }
}
