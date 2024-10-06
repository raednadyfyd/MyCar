import { Component, Input } from '@angular/core';
import { ICar } from '../Interfaces/car';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
@Input() _Car!:ICar;
}
