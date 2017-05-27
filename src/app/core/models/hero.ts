import { stats } from "./stats";
import {skills} from "./skills";
import {weapon} from "./weapon";
import {protection} from "./protection";

export class hero {
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
  skills: skills[];
  weapons : weapon[];
  protections: protection[];
  description: string;
}
