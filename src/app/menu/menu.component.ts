import { Component, OnInit, Inject } from '@angular/core';
import { DishService } from '../services/dish.service';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';
import { expand, flyInOut } from '../animations/app.animation';

@Component({
  selector: '[app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()

  ]
})

export class MenuComponent implements OnInit {

  dishes: Dish[] = DISHES;
  t = 'user';
  selectedDish: Dish = new Dish();
  errMess: string;

  constructor(private dishService: DishService,
    @Inject('baseURL') public baseURL: any) { }

  ngOnInit() {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes,
        errmess => this.errMess = <any>errmess);
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }

}
