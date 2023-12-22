import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes';
import { Hero } from './heroInterface';
import { Observable, of } from 'rxjs';//rxjs is where Observable resides, this was added in the code editor of github then I pulled the changes from the remote repo to the local git repo and working directory.
import { MessageService } from './message.service';//git pull requires an established connection because it updates the version of the specified branch based on changes from the remote repository unlike the git clone which creates a connection and downloads the stuff to the working directory, it doesn't need a prior connection.
@Injectable({
  providedIn: 'root'//this means that it's provided in the root directory which is the mainline working directory.
})
export class HeroService {
  getHeroes() : Observable<Hero[]>{//this observable is a method that represents a stream of asynchronous data.(in this case of type Hero interface)
    const heroes = of(HEROES);//using of() lets us create an observable which allows the heroes data to be treated as an asynchronous stream of data. It emits the array as a single value
    this.messageService.add("HeroService: fetched heroes");
    return heroes;//return the "constant" type array of heroes, this comment change was pulled from the Github Code editor section of the repository
  }//get all heroes
  getHero(id : number) : Observable<Hero | undefined> {//by including "undefined" in the type definition using Observable we are making the possible undefined return valid so there won't be an error to be encountered in this respect.
    const hero = HEROES.find((hero) => hero.id === id);//find a hero object from the array of hero objects that matches the obtained id parameter. Project each element in the HEROES collection of heroes to the condition of checking if the ids match
    if(hero){
      this.messageService.add(`HeroService fetched hero with id : ${id}`);//message added to the messages list/array,
      return of(hero);//if we declare the method as an observable then we use "of()" method when performing the return to indicate creation of an observable allowing the data to be treated as an asynchronous stream
    }
    else{
      const errorMessage = ` found no hero with id : ${id}`;//back ticks being used tells that ${} can be used for showing the value in a variable
      this.messageService.add(`HeroService:${errorMessage}`);//add a new message to the messages array
      return of(undefined);//in case there is no hero with the specified id then return undefined of type "observable" because we're using of() method
    }
  }
  constructor(private messageService : MessageService) { }//to use the service in the typescript file we do this declaration
}
