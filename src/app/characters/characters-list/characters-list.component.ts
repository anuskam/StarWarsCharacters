import { Component, inject, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ICharacter } from '../../interfaces/ICharacter.interface';
import { Data } from '@angular/router';
/* import { Droid } from '../../models/droid';
import { IDroid } from '../../interfaces/IDroid.interface';
 */
import { IPlanetsVisited } from '../../interfaces/IPlanetsVisited.interface';
import { Character } from '../../models/character'; // importo la clase
import { Droid } from '../../models/droid';
import { IDroid } from '../../interfaces/IDroid.interface';
import { Creature } from '../../models/creature';
import { ICreature } from '../../interfaces/ICreature.interface';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss',
})
export class CharactersListComponent implements OnInit {
  public arrCharacters: Character[] = [];
  private charactersService = inject(CharactersService);
  public isLoading: boolean = false;

  ngOnInit(): void {
    // Aquí estamos dando valor a atributos con el nombre que vamos a usar
    /* this.charactersService.getCharacters().subscribe(
      (character: Data) => {
        character['character'].forEach((character: Data) => {
          const planetsVisitedInfo: IPlanetsVisited[] =
            this.createPlanetsVisited(character);
          const characterInfo: ICharacter = {
            id: character['id'],
            galactic_registration: character['galactic_registration'],
            name: character['name'],
            species: character['species'],
            languages: character['languages'],
            wars: character['wars'],
            defenses: character['defenses'],
            image: character['image'],
            headline: character['headline'],
            comment: character['comment'],
            weight: character['weight'],
            height: character['height'],
            planets_visited: planetsVisitedInfo,
          };
        });
        if (character['species'] === 'droid') {
          this.arrCharacters.push(new Droid(character as IDroid));
        }
        this.arrCharacters = character;
      },
      error => {
        console.error('Error al cargar personajes:', error);
      },
    ); */

    /* this.charactersService
      .getCharacters()
      .subscribe((character: ICharacter[]) => {
        character.forEach((character: ICharacter) => {
          const droid = this.createDroids(character);
          console.log(droid);
        });
      }); */
    this.charactersService.getCharacters().subscribe(
      (character: Data) => {
        const newCharacter = character['characters'];
        newCharacter.forEach((character: Data) => {
          if (character['species'] == 'Droid') {
            this.arrCharacters.push(this.createDroids(character));
          } else {
            this.arrCharacters.push(this.createCreatures(character));
          }
          this.startLoading();
        });
      },
      error => {
        console.error('Error al cargar personajes:', error);
        this.isLoading = false;
      },
    );
  }

  startLoading(): void {
    this.isLoading = true;
    // Temporizador para cambiar el estado de carga después de 1 segundo
    setTimeout(() => {
      this.isLoading = false;
    }, 1000);
  }

  onLoad(): void {
    this.isLoading = false;
  }

  createPlanetsVisited(character: Data): IPlanetsVisited[] {
    const visitedPlanets: IPlanetsVisited[] = [];
    character['planets_visited'].forEach((planet: IPlanetsVisited) => {
      visitedPlanets.push(planet);
    });

    return visitedPlanets;
  }

  createDroids(character: Data): Droid {
    return new Droid(character as ICharacter, character as IDroid);
  }

  createCreatures(character: Data): Creature {
    return new Creature(character as ICharacter, character as ICreature);
  }

  getSpecies(): string[] {
    const speciesList = this.arrCharacters.map(character => character.species);
    /* Set elimina duplicados cuando se le pasa un array. De este modo creamos un nuevo 
    array donde cada elemento es único */
    return Array.from(new Set(speciesList));
  }

  getCharactersBySpecies(species: string): ICharacter[] {
    // Filtrar personajes por especie
    return this.arrCharacters.filter(
      character => character.species === species,
    );
  }
}
