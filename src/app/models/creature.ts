import { ICharacter } from '../interfaces/ICharacter.interface';
import { ICreature } from '../interfaces/ICreature.interface';
import { Character } from './character';

export class Creature extends Character implements ICreature {
  place_of_birth: string;
  date_of_birth: string;

  constructor(character: ICharacter, creature: ICreature) {
    super(character);
    this.place_of_birth = creature.place_of_birth;
    this.date_of_birth = creature.date_of_birth;
  }
}
