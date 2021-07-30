import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Food } from '../models/food.model';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor(private http:HttpClient) { }

  getFoods(): Observable<Food[]>{
    // console.log('service method');
    return this.http.get<Food[]>("http://localhost:5000");
  }
//  getFood(id:number):Food{
//   return this.getFoods().find((food: { id: number; })=> food.id === id);
//  }
}
