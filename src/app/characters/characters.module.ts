import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CharactersListComponent } from './characters-list/characters-list.component';
import { CharacterCardComponent } from './character-card/character-card.component';
import { CharactersRoutingModule } from './characters-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { LoadingSpinnerComponent } from '../utils/loading-spipnner/loading-spinner.component';
import { TranslateModule } from '@ngx-translate/core';
import { CharactersService } from '../services/characters.service';
@NgModule({
  declarations: [
    CharactersListComponent,
    CharacterCardComponent,
    CharacterInfoComponent,
    LoadingSpinnerComponent,
  ],
  imports: [
    CommonModule,
    CharactersRoutingModule,
    HttpClientModule,
    TranslateModule,
  ],
  providers: [CharactersService],
})
export class CharactersModule {}
