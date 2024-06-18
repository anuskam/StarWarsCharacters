import { Component, inject, OnInit } from '@angular/core';
import { ICharacter } from '../../interfaces/ICharacter.interface';
import { CharactersService } from '../../services/characters.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-character-info',
  templateUrl: './character-info.component.html',
  styleUrl: './character-info.component.scss',
})
export class CharacterInfoComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private charactersService = inject(CharactersService);
  public characterInfo: ICharacter | undefined;

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const characterId = parseInt(params['id']);
      this.charactersService
        .getCharacterById(characterId)
        .subscribe((character: ICharacter | undefined) => {
          this.characterInfo = character;

          if (!character) {
            console.log(`No se encontró un personaje con el id ${characterId}`);
          }
        });
    });
    /* this.route.params.subscribe(params => {
      const characterId = params['id'];
      console.log('characterId', characterId);
      this.charactersService
        .getCharacterById(characterId)
        .subscribe((character: ICharacter | undefined) => {
          console.log('character', character);
          this.characterInfo = character;
        });
    }); */
  }
}
