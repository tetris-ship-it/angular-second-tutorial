import { Component, OnInit } from '@angular/core';//there is no need for OnInit in this import statement because we included it in the app.module.ts file and included this component in the declarations property of the NgModule decorator.
import { Hero } from '../heroInterface';
//import { HEROES } from '../mock-heroes';
import { HeroService } from '../hero.service';
import { MessageService } from '../message.service';
import { Location } from '@angular/common';//the command for creating a new component is "ng generate component componentName" and for creating a new service "ng generate service serviceName"
@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent {
  heroes : Hero[] = [];//an empty array of type Hero
  /*selectedHero?:Hero;
  onSelect(hero: Hero): void {
    this.selectedHero=hero;
    this.messageService.add(`Selected hero with id : ${hero.id} `);//back ticks for using the value of the hero.id variable using the ${} variable access method

  }*/
  constructor(private heroService : HeroService, private messageService : MessageService, public location : Location){//declaring instances for all the services so we could be able to use them

  }
  getHeroes() : void{
    this.heroService.getHeroes().subscribe(heroes=>this.heroes=heroes);//the subscribe method accepts the values emitted by an observable, in this case from the getHeroes() method after getting the heroes observable using the callback function inside the subscribe method we assign the values to this.heroes property
  }
  ngOnInit(): void{//this method automatically executes on initialization.
    this.getHeroes();//for accessing the getHeroes() method on component initialization, lifecycle hook(2nd in precedence, comes next to ngOnChanges())
  }
  goBack():void{
    this.location.back();//the back method here allows to go back one page by using the instance of the imported Location
  }
}
//the "git branch -d branch_name" command deletes the specified branch from the local repository while "git push origin --delete branch_name" deletes the branch from the remote repository.
