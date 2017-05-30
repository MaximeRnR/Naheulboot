import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Router} from '@angular/router';

import {HeroService} from '../../services/hero.service';
import {Hero} from '../../core/models/hero';

@Component({
  selector: 'dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  providers: [HeroService]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[];
  hero: Hero;



  selectedParam: string;
  selectedParam2: string;
  selectedValue: string;

  params = [
    {key: null},
    {key: 'name', value: 'Nom'},
    {key: 'job', value: 'Classe'},
    {key: 'race', value: 'Race'},
    {key: 'level', value: 'Niveau'},
    {key: 'stats', value: 'Caractéristiques'},
  ];
  stats = [
    {key: null},
    {key: 'COU'},
    {key: 'INT'},
    {key: 'CHA'},
    {key: 'AD'},
    {key: 'FOR'}
  ];
  slider = {
    'autoTicks': false,
    'disabled': false,
    'invert': false,
    'max': 20,
    'min': 0,
    'showTicks': false,
    'step': 1,
    'thumbLabel': true,
    'vertical': false,
  };

  constructor(private router: Router, private heroService: HeroService) {
  }



  getHeroes(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }


  ngOnInit(): void {
    this.getHeroes();
  }

  filterByName() {
    this.heroes = this.heroService.getHeroByName(this.selectedValue);
  }

  gotoDetail(hero: Hero): void {
    this.hero = hero;
    this.router.navigate(['/detail', this.hero.id]);
  }
}
