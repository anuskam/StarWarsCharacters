import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ICharacter } from '../interfaces/ICharacter.interface';

@Injectable({
  providedIn: 'root',
})
export class CharactersService {
  private starWarsUrl: string = 'assets/starWarsCharacters.json';
  private httpClient = inject(HttpClient);

  /* getCharacters(): Observable<ICharacter[]> {
    return this.httpClient
      .get<ICharacter[]>(this.starWarsUrl)
      .pipe(map((response: any) => response.characters));
  } */
  /* getCharacters(): Observable<ICharacter[]> {
    const data = this.httpClient.get<ICharacter[]>(this.starWarsUrl);
    console.log(data);
    return data;
  } */

  /* getCharacters(): Observable<ICharacter[]> {
    return this.httpClient
      .get<{ characters: ICharacter[] }>(this.starWarsUrl)
      .pipe(map(data => data.characters as ICharacter[]));
  } */

  getCharacters(): Promise<ICharacter[]> {
    return fetch(this.starWarsUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => data.characters as ICharacter[]) // Mapea la respuesta a un arreglo de ICharacter
      .catch(error => {
        console.error('Error fetching characters:', error);
        return [];
      });
  }
}
