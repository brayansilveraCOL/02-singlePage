import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HerosService} from "../../../services/heros.service";
import {hero} from "../../Interfaces/hero.interface";

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {

  constructor(
               private _heroService:HerosService,
               private _RouterHero:Router) { }

  ngOnInit(): void {

  }
   buscarheroe(hero:string){
    console.log(hero);
    this._RouterHero.navigate(['/search',hero])

  }

}
