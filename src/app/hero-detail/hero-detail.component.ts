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

   ngOnInit():void{
    this.getHero();
   }

   getHero():void{
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.heroService.getHero(id).subscribe(hero=>this.hero=hero);
   }
   goBack():void{
    this.location.back();
   }
}
