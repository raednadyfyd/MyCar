import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PopularCarsComponent } from './popular-cars/popular-cars.component';
import { FormsModule } from '@angular/forms';
import { CarComponent } from './car/car.component';
import { HttpClientModule } from '@angular/common/http';
import { AllCarsComponent } from './all-cars/all-cars.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PopularCarsComponent,
    CarComponent,
    AllCarsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
