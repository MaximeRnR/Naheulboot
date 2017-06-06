
import { Injectable }    from '@angular/core';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

import {Hero} from '../core/models/hero';

@Injectable()
export class HeroService {

  private heroesUrl = 'api/heroes';  // URL to web api
  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  create(hero: Hero): Promise<Hero> {
    return this.http
      .post(this.heroesUrl, JSON.stringify(
        {
          name: hero.name,
          sexe: 'Masculin',
          job: hero.job,
          race: hero.race,
          level: hero.level,
          experience: 258,
          destiny_point: 0,
          gold: 583,
          stats: {
            bravery: hero.stats.bravery,
            intelligence:  hero.stats.intelligence,
            charisma:  hero.stats.charisma,
            dexterity:  hero.stats.dexterity,
            strength:  hero.stats.strength,
            health: 25,
            mana: 0,
            armor: 0,
            attack: 10,
            parry: 10
          },
          skills: [
            {
              name: 'Test',
              effect: 'test'
            }
          ],
          weapons: [],
          protections: [],
          description: 'description'
        }),
        {headers: this.headers})
      .toPromise()
      .then(res => res.json().data as Hero)
      .catch(this.handleError);
  }

  update(hero: Hero): Promise<Hero> {
    const url = `${this.heroesUrl}/${hero.id}`;
    return this.http
      .put(url, JSON.stringify(hero), {headers: this.headers})
      .toPromise()
      .then(() => hero)
      .catch(this.handleError);
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .catch(this.handleError);
  }

  getHero(id: number): Promise<Hero> {
    const url = `${this.heroesUrl}/${id}`;
    return this.http.get(url)
      .toPromise()
      .then(response => response.json().data as Hero)
      .catch(this.handleError);
  }

  getHeroesByName(name: string): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .then(heroes => heroes.filter(hero => hero.name.indexOf(name) != -1));
  }

  getHeroesByStat(stat: string, value: number): Promise<Hero[]> {
    return this.http.get(this.heroesUrl)
      .toPromise()
      .then(response => response.json().data as Hero[])
      .then(heroes => heroes.filter(hero => hero.stats[stat] <= value)
        .sort((hero1, hero2) => hero2.stats[stat] - hero1.stats[stat]));
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occurred', error); // for demo purposes only
    return Promise.reject(error.message || error);
  }
}
