import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CarComponent } from './components/car/car.component';
import { CarsComponent } from './components/cars/cars.component';
import {RouterModule} from '@angular/router';
import {HomeComponent} from './components/home/home.component';
import { FullCarComponent } from './components/full-car/full-car.component';

@NgModule({
  declarations: [
    AppComponent,
    CarComponent,
    CarsComponent,
    FullCarComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {
        path: 'home',
        component: HomeComponent
      },
      {
        path: 'cars',
        component: CarsComponent, children: [
          {path: ':id', component: FullCarComponent}
        ]
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
