import { Component } from '@angular/core'

/**
 * Created by Matt on 7/8/17.
 */

@Component({
    selector: 'my-app',
    template: `
      	<h1>{{title}}</h1>
      	<nav>
      	    <a routerLink="/dashboard">Dashboard</a>
      	    <a routerLink="/heroes">Heroes</a>
        </nav>
      	<router-outlet></router-outlet>

    `
})
export class AppComponent {
    title = 'Tour of Heros';

}