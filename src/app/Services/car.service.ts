import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Car, GenericResponse } from '../Interfaces/generic-response';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carURL = 'https://abulkhair-cars-apis.vercel.app/api/v1/cars'; 

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<GenericResponse<Car>> {
    return this.http.get<GenericResponse<Car>>(this.carURL);
  }

  // getPopularCars(limit:number): Observable<ICar[]> {
  //   return this.http.get<ICar[]>(`${this.carURL}?limit=${limit}`);
  // }
}
