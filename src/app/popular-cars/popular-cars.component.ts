import { Component, OnInit } from '@angular/core';
import { CarService } from '../Services/car.service';
import { Car, GenericResponse } from '../Interfaces/generic-response';

@Component({
  selector: 'app-popular-cars',
  templateUrl: './popular-cars.component.html',
  styleUrls: ['./popular-cars.component.scss']
})
export class PopularCarsComponent implements OnInit {

  private carService: CarService;
  searchQuery: string = '';
  cars!: Car[];


  constructor(_carService: CarService) {
    this.carService = _carService;
  }



  ngOnInit(): void {
    this.getPopularCars();
  }

  private getPopularCars(): void {

    this.carService.getAllCars().subscribe(
      (response: GenericResponse<Car>) => {
        this.cars = response.result.slice(0, 4);
      },
      function (error) {
        console.error('Error fetching cars:', error);
      }
    );
  }

  onSearch() {
  }
}
