import { Component, OnInit } from '@angular/core';
import { ICar } from '../Interfaces/car';
import { CarService } from '../Services/car.service';

@Component({
  selector: 'app-popular-cars',
  templateUrl: './popular-cars.component.html',
  styleUrls: ['./popular-cars.component.scss']
})
export class PopularCarsComponent implements OnInit {

  private carService: CarService;
  searchQuery: string = '';
  cars!: ICar[];


  constructor(_carService: CarService) {
    this.carService = _carService;
  }

  

  ngOnInit(): void {
    this.getPopularCars();
  }

  private getPopularCars(): void {
    
    this.carService.getPopularCars(4).subscribe(
      (response: ICar[]) => {
        this.cars = response;
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }

  onSearch() {
  }
}
