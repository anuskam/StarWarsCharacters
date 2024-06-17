import { Component, inject, OnInit } from '@angular/core';
import { CharactersService } from '../../services/characters.service';
import { ICharacter } from '../../interfaces/ICharacter.interface';
/* import { ICharacter } from '../../interfaces/ICharacter.interface'; */
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
      (character: ICharacter[]) => {
        console.log('character', character);
        this.arrCharacters = character;
        console.log(this.arrCharacters);
      },
      error => {
        console.error('Error al cargar personajes:', error);
      },
    ); */
    this.charactersService
      .getCharacters()
      .then(data => {
        this.arrCharacters = data; // Asigna los personajes obtenidos al arreglo characters
        console.log(this.arrCharacters);
      })
      .catch(error => {
        console.error('Error al cargar personajes:', error);
      });
  }
}
