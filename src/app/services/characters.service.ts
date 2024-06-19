import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICharacter } from '../interfaces/ICharacter.interface';
import { Observable, catchError, map, of } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private starWarsUrl: string = 'assets/starWarsCharacters.json';
  private httpClient = inject(HttpClient);

  getCharacters(): Observable<ICharacter[]> {
    return this.httpClient.get<ICharacter[]>(this.starWarsUrl).pipe(
      catchError(error => {
        console.error('Error fetching characters', error);
        return of([] as ICharacter[]);
      }),
    );
  }

  // Aquí tengo la pipe para acceder a characters directamente. Ahora lo estoy haciendo en el ts del list
  /* getCharacters(): Observable<ICharacter[]> {
    return this.httpClient
      .get<{ characters: ICharacter[] }>(this.starWarsUrl)
      .pipe(map(data => data.characters));
  } */

  getCharacterById(id: number): Observable<ICharacter | undefined> {
    return this.getCharacters().pipe(
      map(characters => characters.find(character => character.id === id)),
      catchError(error => {
        console.error('Error in getCharacterById', error);
        return of(undefined);
      }),
    );
  }
}
