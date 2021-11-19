import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeroesModule } from './modules/heroes/heroes.module';
import { ContadorModule } from './modules/contador/contador.component';
import { DbzModule } from './modules/dbz/dbz.module';
import { DbzService } from './modules/dbz/services/dbz.services';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HeroesModule,
    ContadorModule,
    DbzModule
  ],
  providers: [
    DbzService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
