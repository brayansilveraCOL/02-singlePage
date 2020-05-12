import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {hero} from '../Interfaces/hero.interface';
import {HerosService} from '../../services/heros.service';
import {HeroesComponent} from '../heroes/heroes.component';
@Component({
  selector: 'app-detalle-hero',
  templateUrl: './detalle-hero.component.html',

})
export class DetalleHeroComponent implements OnInit {
  hero:any={};
  constructor( private _activatedRoute:ActivatedRoute,
               private _heroServide:HerosService,) {
    this._activatedRoute.params.subscribe(params=>{
        console.log(params['id']);
        this.hero = this._heroServide.getHero(params['id']);
        console.log(this.hero);
    })
  }

  ngOnInit(): void {
  }

}
