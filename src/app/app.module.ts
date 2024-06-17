import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
// i18n
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslation } from './core/config/i18n/translate-loader.config';
import { CharactersListComponent } from './characters/characters-list/characters-list.component';
import { CharacterCardComponent } from './characters/character-card/character-card.component';
/* import { MultiLanguageComponent } from './components/multi-language/multi-language.component'; */
@NgModule({
  declarations: [
    AppComponent,
    CharactersListComponent,
    CharacterCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule,
    HttpClientModule,
  ],
  providers: [importProvidersFrom(TranslateModule.forRoot(provideTranslation()))],
  bootstrap: [AppComponent]
})
export class AppModule { }
