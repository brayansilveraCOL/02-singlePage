import {Router, RouterModule, Routes} from '@angular/router';
import { HomeComponent } from './Components/home/home.component';
import {AboutComponent} from './Components/about/about.component';
import {HeroesComponent} from './Components/heroes/heroes.component';
import {DetalleHeroComponent} from './Components/detalle-hero/detalle-hero.component';
import {SearchComponent} from './Components/Shared/search/search.component';
const APP_ROUTES: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'about', component: AboutComponent},
  {path: 'search/:param', component: SearchComponent},
  {path: 'heros', component: HeroesComponent},
  {path: 'heros/:id', component: DetalleHeroComponent},
  {path: '**', pathMatch: 'full', redirectTo:'home'}
];
 export const APP_ROUTING  = RouterModule.forRoot(APP_ROUTES);
