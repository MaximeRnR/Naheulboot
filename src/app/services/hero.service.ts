import {Injectable} from '@angular/core';

import {HEROES} from './mock-heroes';
import {Hero} from '../core/models/hero';

@Injectable()
export class HeroService {
  heroes: Hero[];

  getHeroes(): Promise<Hero[]> {
    return Promise.resolve(HEROES);
  }

  getHero(id: number): Promise<Hero> {
    return this.getHeroes()
      .then(heroes => heroes.find(hero => hero.id === id));
  }

  getHeroByName(name: string) {
    this.getHeroes().then(heroes => {
      this.heroes = heroes;
      return this.heroes.filter(hero => hero.name.startsWith(name));
    });
  }

}
