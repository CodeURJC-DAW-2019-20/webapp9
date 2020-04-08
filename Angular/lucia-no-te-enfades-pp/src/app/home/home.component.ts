import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./carousel.component.css']
})
export class HomeComponent implements OnInit {

  imgCarr1Url = "assets/main1.jpg";
  imgCarr2Url = "assets/main2.jpg";
  imgCarr3Url = "assets/main3.jpg";
  imgRlIcon = "assets/rl-icon.jpg";
  imgLeaderboard = "assets/leaderboardLogo.png";
  imgUserLogo = "assets/userLogo.png";
  imgWebIconUrl = "assets/web-icon-white.png";
  
  constructor() { }

  ngOnInit(): void {
  }

}
