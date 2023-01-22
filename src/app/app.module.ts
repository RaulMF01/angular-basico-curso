import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//crear modulo llamad contadorModule
//declaraciones e importaciones

import { ContadorComponent } from './contador/contador/contador.component';


import { HeroesModule } from './heroes/heroes.module';
import { contadorModule } from './contador/contadorModule';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HeroesModule,
    contadorModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
