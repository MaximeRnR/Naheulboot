import {Injectable} from '@angular/core';

import {HEROES} from './mock-heroes';
import {Hero} from '../core/models/hero';

@Injectable()
export class HeroService {

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroesByName(name: string): Promise<Hero[]> {
    return this.getHeroes()
      .then(heroes => heroes.filter(hero => hero.name.indexOf(name) !== -1));
  }

  getHeroesByStat(stat: string, value: number): Promise<Hero[]> {
    return this.getHeroes()
      .then(heroes => heroes.filter(hero => hero.stats[stat] <= value)
        .sort((hero1, hero2) => hero2.stats[stat] - hero1.stats[stat]));
  }
}
