import { Component, OnInit } from '@angular/core';
import { ICar } from '../Interfaces/car';
import { CarService } from '../Services/car.service';

@Component({
  selector: 'app-all-cars',
  templateUrl: './all-cars.component.html',
  styleUrls: ['./all-cars.component.scss']
})
export class AllCarsComponent implements OnInit {
  private carService: CarService;
  cars!: ICar[];


  constructor(private _carService: CarService) {
    this.carService = _carService;
  }

  

  ngOnInit(): void {
    this.getAllCars();
  }

  private getAllCars(): void {
    
    this.carService.getAllCars().subscribe(
      (response: ICar[]) => {
        this.cars = response;
      },
      (error) => {
        console.error('Error fetching cars:', error);
      }
    );
  }
}
