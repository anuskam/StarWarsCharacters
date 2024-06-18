import { ICharacter } from '../interfaces/ICharacter.interface';
import { IDroid } from '../interfaces/IDroid.interface';
import { Character } from './character';

export class Droid extends Character implements IDroid {
  model: string;
  durability: number;

  constructor(character: ICharacter, droid: IDroid) {
    super(character);
    this.model = droid.model;
    this.durability = droid.durability;
  }
}
