import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './heroInterface';
import { Observable, of } from 'rxjs';//rxjs is where the Observable resides, this was added in the code editor of github then I pulled the changes from the remote repo to the local git repo and working directory
import { MessageService } from './message.service';
@Injectable({
  providedIn: 'root'//this means that it's provided in the root directory which is the mainline working directory.
})
export class HeroService {
  getHeroes() : Observable<Hero[]>{//this observable is a method that represents a stream of asynchronous data.(in this case of type Hero interface)
    const heroes = of(HEROES);//using of() lets us create an observable which allows the heroes data to be treated as an asynchronous stream of data.
    this.messageService.add("HeroService: fetched heroes");
    return heroes;
  }
  getHero(id : number) : Observable<Hero | undefined> {//by including "undefined" in the type definition using Observable we are making the possible undefined return valid so there won't be an error to be encountered in this respect.
    const hero = HEROES.find((hero) => hero.id === id);//find a hero object from the array of hero objects that matches the obtained id parameter.
    if(hero){
      this.messageService.add(`HeroService fetched hero with id : ${id}`);
      return of(hero);
    }
    else{
      const errorMessage = ` found no hero with id : ${id}`;
      this.messageService.add(`HeroService:${errorMessage}`);
      return of(undefined);
    }
  }
  constructor(private messageService : MessageService) { }
}
