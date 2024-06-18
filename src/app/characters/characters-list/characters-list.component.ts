import { Component, inject, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ICharacter } from '../../interfaces/ICharacter.interface';
import { Data } from '@angular/router';
/* import { Droid } from '../../models/droid';
import { IDroid } from '../../interfaces/IDroid.interface';
 */
import { IPlanetsVisited } from '../../interfaces/IPlanetsVisited.interface';

@Component({
  selector: 'app-characters-list',
  templateUrl: './characters-list.component.html',
  styleUrl: './characters-list.component.scss',
})
export class CharactersListComponent implements OnInit {
  public arrCharacters: ICharacter[] = [];
  private charactersService = inject(CharactersService);

  ngOnInit(): void {
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
      (character: ICharacter[]) => {
        this.arrCharacters = character;
      },
      error => {
        console.error('Error al cargar personajes:', error);
      },
    );
  }

  createPlanetsVisited(character: Data): IPlanetsVisited[] {
    const visitedPlanets: IPlanetsVisited[] = [];
    character['planets_visited'].forEach((planet: IPlanetsVisited) => {
      visitedPlanets.push(planet);
    });

    return visitedPlanets;
  }

  /* createDroids(character: any): IDroid[] {
    const droids: IDroid[] = [];
    character.model = new Droid(character, droid);
    droid.durability = new Droid(character, droid);

    return droids;
  } */

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
