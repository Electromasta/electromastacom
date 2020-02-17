import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  onNavigateToEastmarches()  {
    window.location.href="http://eastmarches.com/";
  }

  onNavigateToBestiary()  {
    window.location.href="http://bestiary.xyz/";
  }
}
