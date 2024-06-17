import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [CharactersListComponent, CharacterCardComponent],
  imports: [CommonModule, CharactersRoutingModule, HttpClientModule],
})
export class CharactersModule {}
