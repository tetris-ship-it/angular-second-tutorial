import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroInterface';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes : Hero[] = [];
  /*selectedHero?:Hero;
  onSelect(hero: Hero): void {
    this.selectedHero=hero;
    this.messageService.add(`Selected hero with id : ${hero.id} `);//back ticks for using the value of the hero.id variable using the ${} variable access method

  }*/
  constructor(private heroService : HeroService, private messageService : MessageService, public location : Location){

  }
  getHeroes() : void{
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);//the subscribe method accepts the values emitted by an observable, in this case from the getHeroes() method after getting the heroes observable using the callback function inside the subscribe method we assign the values to this.heroes property
  }
  ngOnInit(): void{
    this.getHeroes();//for returning it at the right time
  }
  goBack():void{
    this.location.back();//the back method is supplied as it's a part of the imported Location class
  }
}
