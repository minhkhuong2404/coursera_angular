import { Component, Inject, OnInit } from '@angular/core';
import { expand, flyInOut } from '../animations/app.animation';
import { LeaderService } from '../services/leader.service';
import { Leader } from '../shared/leader';
import { LEADERS } from '../shared/leaders';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
    flyInOut(),
    expand()

  ]
})
export class AboutComponent implements OnInit {
  errmess: string;
  leaders: Leader[] = LEADERS;
  constructor(private leaderService: LeaderService, @Inject('baseURL') public baseURL: any) { }

  ngOnInit(): void {
    this.leaderService.getLeaders().subscribe(leader => this.leaders = leader, errmess => this.errmess = <any>errmess);
  }

}
