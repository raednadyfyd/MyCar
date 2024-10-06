import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICar } from '../Interfaces/car';

@Injectable({
  providedIn: 'root'
})
export class CarService {

  private carURL = 'https://freetestapi.com/api/v1/cars'; 

  constructor(private http: HttpClient) { }

  getAllCars(): Observable<ICar[]> {
    return this.http.get<ICar[]>(this.carURL);
  }

  getPopularCars(limit:number): Observable<ICar[]> {
    return this.http.get<ICar[]>(`${this.carURL}?limit=${limit}`);
  }
}
