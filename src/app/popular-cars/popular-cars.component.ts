import { Component } from '@angular/core';
import { ICar } from '../Interfaces/car';

@Component({
  selector: 'app-popular-cars',
  templateUrl: './popular-cars.component.html',
  styleUrls: ['./popular-cars.component.scss']
})
export class PopularCarsComponent {
  
  searchQuery: string = '';
  cars!: ICar[];


  onSearch() {
  }
}
