/**
 * Created by Matt on 7/8/17.
 */
import { Component, OnInit, OnDestroy } from '@angular/core';

import { Hero } from './hero';
import { HeroService } from './hero.service';

@Component({
    selector: 'my-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit, OnDestroy {
    heroes: Hero[] = [];

    constructor(private  heroService: HeroService) {}

    ngOnInit(): void {
        this.heroService.getHeroes().then(
            heroes => this.heroes = heroes.slice(1,5)
        );
    }

    ngOnDestroy(): void {
        console.log("Noot noot");
    }

}