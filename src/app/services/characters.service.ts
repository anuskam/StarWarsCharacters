import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICharacter } from '../interfaces/ICharacter.interface';
import { Observable, map } from 'rxjs';
/* import { IDroid } from '../interfaces/IDroid.interface';
import { Droid } from '../models/droid';
 */
@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private starWarsUrl: string = 'assets/starWarsCharacters.json';
  private httpClient = inject(HttpClient);

  getCharacters(): Observable<ICharacter[]> {
    return this.httpClient
      .get<{ characters: ICharacter[] }>(this.starWarsUrl)
      .pipe(map(data => data.characters));
  }

  /* getDroids(): Observable<IDroid[]> {
    return this.getCharacters().pipe(
      map(characters => {
        return characters.map(character => {
          const droidDetails: IDroid[] = [];
          droidDetails.push(character)
          return new Droid(character, droidDetails);
        });
      }),
    );
  } */

  getCharacterById(id: number): Observable<ICharacter | undefined> {
    return this.getCharacters().pipe(
      map(characters => characters.find(character => character.id === id)),
    );
  }
}
