import { Component, Input } from '@angular/core';
import { Car } from '../Interfaces/generic-response';

@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.scss']
})
export class CarComponent {
@Input() car!:Car;
}
