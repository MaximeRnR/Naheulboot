import { stats } from "./stats";
import { skill } from "./skill";
import { weapon } from "./weapon";
import { protection } from "./protection";

export class Hero {
  id: number;
  name: string;
  sexe: string;
  job: string;
  race: string;
  level: number;
  experience: number;
  destiny_point: number;
  gold: number;
  stats: stats ;
  skills: skill[];
  weapons : weapon[];
  protections: protection[];
  description: string;
}
