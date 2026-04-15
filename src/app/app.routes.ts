import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Endangered } from './endangered/endangered';
import { History } from './history/history';
import { AnimalGame } from './animal-game/animal-game'

export const routes: Routes = [
  { path: 'home', component: Home },
  { path: '', component: Home },
  // { path: 'endangered', component: Endangered },
  { path: 'history', component: History },
  { path: 'animalGame', component: AnimalGame },
];