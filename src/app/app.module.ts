import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms'
import { AppComponent }  from './app.component';
import { HeroDetailComponent } from './hero-detail.component'
import { HerosComponent } from "./heros.component";
import { HeroService } from "./hero.service";
import { RouterModule }   from '@angular/router';
import {DashboardComponent} from "./dashboard.component";



@NgModule({
  imports:      [
      BrowserModule,
      FormsModule,
      RouterModule.forRoot([
          {
              path: 'heroes',
              component: HerosComponent
          },
          {
              path: 'dashboard',
              component: DashboardComponent
          },
          {
              path: '',
              redirectTo: '/dashboard',
              pathMatch: 'full'
          },
          {
              path: 'detail/:id',
              component: HeroDetailComponent
          },
      ])
  ],
  declarations: [
      AppComponent,
      HerosComponent,
      HeroDetailComponent,
      DashboardComponent,
  ],
  providers: [
      HeroService
  ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
