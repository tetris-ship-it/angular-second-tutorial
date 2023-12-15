import { Component,Input } from '@angular/core';
import { Hero } from '../heroInterface';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';
@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {
   @Input() hero? : Hero//apparently @Input() can label getting data from a service as "getting data from a parent component"

   constructor(
    private route : ActivatedRoute,//holds information about the route to this instance of the hero details component
    private heroService : HeroService,//allows us access to the data using service
    private location : Location//location provides an angular service for interacting with the browser which in this case will be for having back navigation.
   ) {}

   ngOnInit():void{//ngOnInit() method is a life cycle hook useful for multiple things because it runs the moment the component is initialized: initializing component properties, retrieving data from a database and the such, subscribing to observables like it's done here through a method, performing setup tasks like configuring plugins and initializing 3rd party libraries.
    this.getHero();
   }

   getHero():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));//snapshot provides a snapshot of the route information about the current route, paramMap provides the parameters associated with the current route, get('id') retrieves the value of the id paramter from the paramMap(also called the parameter dictionary) of the snapshot of the instance of the activatedroute class(the route)
    this.heroService.getHero(id).subscribe(hero=>this.hero=hero);//the difference between Observable and Promise is that an observable is lazy meaning that when and how to use the data can be controller but promise activates the moment the code runs. Plus for multiple value returns using an observable is advisable but when single values are returned using a promise is better.
    //and another difference is that observable needs subscribe() in its recipient while promise needs then() in its recipient, we are basically giving a value to the nullable "hero class"
   }//in this section we are using the getHero method of the heroService then subscribing to the observable with the implementation inside assigning the hero value obtained from the method to the hero property inside this class
   goBack():void{
    this.location.back();
   }
}
