import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';
import { DishService } from '../services/dish.service';
import { Promotion } from '../shared/promotion';
import { PromotionService } from '../services/promotion.service';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { Inject } from '@angular/core';
import { expand, flyInOut } from '../animations/app.animation';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()

  ]
})

export class HomeComponent implements OnInit {
  dish: Dish = new Dish;
  promotion!: Promotion;
  leader!: Leader;
  dishErrMess: string;
  proErrMess: string;
  leaderErrMess: string;

  constructor(private dishservice: DishService,
    private promotionservice: PromotionService,
    private leaderservice: LeaderService,
    @Inject('baseURL') public baseURL: any) { }

  ngOnInit() {
    this.dishservice.getFeaturedDish()
      .subscribe(dishes => this.dish = dishes, errmess => this.dishErrMess = <any>errmess);
    this.promotionservice.getFeaturedPromotion().subscribe(promotions => this.promotion = promotions, errmess => this.proErrMess = <any>errmess);
    this.leaderservice.getFeaturedLeader().subscribe(leader => this.leader = leader, errmess => this.leaderErrMess = <any>errmess);
  }
}
