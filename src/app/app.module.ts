import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CharactersModule } from './characters/characters.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { importProvidersFrom } from '@angular/core';
// i18n
import { TranslateModule } from '@ngx-translate/core';
import { provideTranslation } from './core/config/i18n/translate-loader.config';
import { Error404Component } from './core/error404/error404.component';
import { NavbarComponent } from './core/navbar/navbar.component';
import { MultiLanguageComponent } from './core/multi-language/multi-language.component';
import { FooterComponent } from './core/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Error404Component,
    NavbarComponent,
    MultiLanguageComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TranslateModule,
    HttpClientModule,
    CharactersModule,
  ],
  providers: [
    importProvidersFrom(TranslateModule.forRoot(provideTranslation())),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
