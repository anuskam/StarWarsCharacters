import { IPlanetsVisited } from './IPlanetsVisited.interface';

export interface ICharacter {
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
  /* place_of_birth: string;
  date_of_birth: string; */
  weight: number;
  height: number;
  planets_visited: IPlanetsVisited[];
}
