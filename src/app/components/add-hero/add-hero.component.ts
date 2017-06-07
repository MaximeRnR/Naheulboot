import { Component, OnInit } from '@angular/core';
import { Hero } from "../../core/models/hero";
import { HeroService } from "../../services/hero.service";
import { HEROES } from "../../services/mock-heroes";

@Component({
  selector: 'app-add-hero',
  templateUrl: './add-hero.component.html',
  styleUrls: ['./add-hero.component.css'],
  providers: [HeroService]
})
export class AddHeroComponent implements OnInit {

  selectedHero: Hero = { id: null,
    name: '',
    sexe: '',
    job: '',
    race: '',
    level: 0,
    experience: 0,
    destiny_point: 0,
    gold: 0,
    stats: {
      bravery: 0,
      intelligence: 0,
      charisma: 0,
      dexterity: 0,
      strength: 0,
      health: 0,
      mana: 0,
      armor: 0,
      attack: 0,
      parry: 0
    },
    skills: [],
    weapons: [],
    protections: [],
    description: ''
  };

  tiles = [
    {id: 1, text: 'Infos Globales', cols: 1, rows: 2, color: '#FFFFFF'},
    {id: 2, text: 'Caractéristique', cols: 3, rows: 1, color: '#FFFFFF'},
    {id: 3, text: 'Compétences', cols: 3, rows: 1, color: '#FFFFFF'},
    {id: 4, text: 'Armes', cols: 2, rows: 1, color: '#FFFFFF'},
    {id: 5, text: 'Protections', cols: 2, rows: 1, color: '#FFFFFF'},
  ];


  constructor(private heroService: HeroService) { }

  ngOnInit() {
  }

  addHero(): void {
    this.heroService.create(this.selectedHero)
  }
}
