import { Component, OnInit } from '@angular/core';
import { Hero } from '../heroInterface';
import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes : Hero[] = [];
  selectedHero?:Hero;
  onSelect(hero: Hero): void {
    this.selectedHero=hero;
    this.messageService.add(`Selected hero with id : ${hero.id} `);

  }
  constructor(private heroService : HeroService, private messageService : MessageService){

  }
  getHeroes() : void{
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);
  }
  ngOnInit(): void{
    this.getHeroes();//for returning it at the right time
  }
}
