import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/food.model';
import { FoodService } from 'src/app/services/food.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
id:number;
food:Food[] = [];
  constructor( private activatedRoute:ActivatedRoute , private foodService:FoodService) {
    // this.id  = +this.activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.foodService.getFoods()
     .subscribe(data=>this.food = data)
    // this.food = this.foodService.getFoods();
    
  }

}
