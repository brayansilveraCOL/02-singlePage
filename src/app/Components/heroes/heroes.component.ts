import { Component, OnInit } from '@angular/core';
import {HerosService} from '../../services/heros.service';
import {hero} from '../Interfaces/hero.interface';
import {Router} from '@angular/router';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html'
})
export class HeroesComponent implements OnInit {
  hero:hero[]=[];
  constructor( private _heroService:HerosService,
               private _RouterHero:Router) {
    console.log("Constructor.");
  }

  ngOnInit(): void {
    this.hero = this._heroService.getHeroes();
    console.log(this.hero)
  }
  public verHero(i:number){
      this._RouterHero.navigate(['/heros', i])
  }

}
