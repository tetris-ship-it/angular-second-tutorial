import { Component,OnInit } from '@angular/core';
import { Hero } from '../heroInterface';
import { HeroService } from '../hero.service';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent {
  heroes: Hero[] = [];
  constructor(public heroService: HeroService) {}

  ngOnInit(): void {
    this.getHeroes(); //call it from the ngOnInit rather than the constructor, to minimize involvement of the constructor
  }
  getHeroes(): void {
    this.heroService
      .getHeroes()
      .subscribe((heroes) => (this.heroes = heroes.slice(1, 5))); //slice the list to return only the 2nd,3rd,4th and 5th heroes
  }
}
