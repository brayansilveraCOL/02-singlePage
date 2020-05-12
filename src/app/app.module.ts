import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

//Rutas
import {APP_ROUTING} from './app.routes';

//Servicios
import {HerosService} from './services/heros.service';
//Componentes
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/Shared/nav-bar/nav-bar.component';
import { HomeComponent } from './Components/home/home.component';
import { AboutComponent } from './Components/about/about.component';
import { HeroesComponent } from './Components/heroes/heroes.component';
import { DetalleHeroComponent } from './Components/detalle-hero/detalle-hero.component';
import { SearchComponent } from './Components/Shared/search/search.component';
import { HeroeTarjetaComponent } from './Components/heroe-tarjeta/heroe-tarjeta.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    DetalleHeroComponent,
    SearchComponent,
    HeroeTarjetaComponent,


  ],
  imports: [
    BrowserModule,
    APP_ROUTING,

  ],
  providers: [
    HerosService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
