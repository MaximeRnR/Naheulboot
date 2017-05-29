import 'rxjs/add/operator/switchMap';

import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';

import { Hero } from '../../core/models/hero';
import { HeroService } from '../../services/hero.service';


@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.css'],
  providers: [HeroService]
})
export class HeroDetailsComponent implements OnInit {
  selectedHero: Hero;

  constructor(private heroService: HeroService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.heroService.getHero(+params['id']))
      .subscribe(hero => this.selectedHero = hero);
  }

}
