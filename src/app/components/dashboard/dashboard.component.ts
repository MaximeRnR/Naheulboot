import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { HeroService } from '../../services/hero.service';
import { Hero } from '../../core/models/hero';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  hero: Hero;

  constructor(private router: Router, private heroService: HeroService) {
  }

  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }


  ngOnInit(): void {
    this.getHeroes();
  }

  gotoDetail(hero: Hero): void {
    this.hero = hero;
    this.router.navigate(['/detail', this.hero.id]);
  }
}
