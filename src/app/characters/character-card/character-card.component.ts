import { Component, Input } from '@angular/core';
import { ICharacter } from '../../interfaces/ICharacter.interface';

@Component({
  selector: 'app-character-card',
  templateUrl: './character-card.component.html',
  styleUrl: './character-card.component.scss',
})
export class CharacterCardComponent {
  @Input() character: ICharacter | undefined;
}
