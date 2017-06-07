import { Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import { Router} from '@angular/router';

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
  selectedParam: string;
  selectedStat: string = "";
  selectedValue: string = "";
  selectedStatValue: number;

  params = [
    {key: null, value: ''},
    {key: 'name', value: 'Nom'},
    {key: 'job', value: 'Classe'},
    {key: 'race', value: 'Race'},
    {key: 'level', value: 'Niveau'},
    {key: 'stats', value: 'Caractéristiques'},
  ];
  stats = [
    {key: null, value: ''},
    {key: 'bravery', value: 'COU'},
    {key: 'intelligence', value: 'INT'},
    {key: 'charisma', value: 'CHA'},
    {key: 'dexterity', value: 'AD'},
    {key: 'strength', value: 'FOR'},
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

  resetParam(): void {
    this.getHeroes();
    this.selectedValue = null;
    this.selectedStat = null;
    this.selectedStatValue = null;
  }

  resetStat(): void {
    this.getHeroes();
    this.selectedStatValue = null;
  }


  filterByName(): void {
    this.heroService.getHeroesByName(this.selectedValue).then(heroes => this.heroes = heroes);
  }

  filterByStat(): void {
    this.heroService.getHeroesByStat(this.selectedStat, this.selectedStatValue).then(heroes => this.heroes = heroes);
  }

  goToAdd(): void {
    this.router.navigate(['/add']);
  }

  gotoDetail(hero: Hero): void {
    this.hero = hero;
    this.router.navigate(['/detail', this.hero.id]);
  }
}
