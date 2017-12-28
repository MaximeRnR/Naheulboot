import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from "@angular/router";

import { Hero } from "../../core/models/hero";
import { HeroService } from "../../services/hero.service";

@Component({
  selector: 'app-update-hero',
  templateUrl: '../hero-template/html/hero-change.component.html',
  styleUrls: ['../hero-template/css/hero-change.component.css'],
  providers: [HeroService]
})
export class UpdateHeroComponent implements OnInit {
  selectedHero: Hero;
  tiles = [
    {id: 1, text: 'Infos Globales', cols: 1, rows: 2, color: '#FFFFFF'},
    {id: 2, text: 'Caractéristique', cols: 3, rows: 1, color: '#FFFFFF'},
    {id: 3, text: 'Compétences', cols: 3, rows: 1, color: '#FFFFFF'},
    {id: 4, text: 'Armes', cols: 2, rows: 1, color: '#FFFFFF'},
    {id: 5, text: 'Protections', cols: 2, rows: 1, color: '#FFFFFF'},
  ];

  constructor(private heroService: HeroService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.selectedHero = hero);
  }

  save(): void {
    this.heroService.update(this.selectedHero);
  }

}
