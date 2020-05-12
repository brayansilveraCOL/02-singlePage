import { Component, OnInit } from '@angular/core';
import {HerosService} from '../../../services/heros.service';
import {NavBarComponent} from '../nav-bar/nav-bar.component';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {getUrlScheme} from "@angular/compiler";
import {hero} from "../../Interfaces/hero.interface";
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  hero:any={}
  constructor(private rutaActiva:ActivatedRoute,
              private service: HerosService,
              private _RouterHero:Router) {

  }

  ngOnInit(): void {
    this.rutaActiva.params.subscribe(params=>{
     // console.log(params['param'])
      this.hero = this.service.FindHero(params['param'])

    })
  }

}
