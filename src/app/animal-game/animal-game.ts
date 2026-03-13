import { Component } from '@angular/core';
import { AnimalHabitatGameComponent } from './animalGameComponent/animalGameComponent'

@Component({
  selector: 'app-animal-game',
  imports: [AnimalHabitatGameComponent],
  templateUrl: './animal-game.html',
  styleUrl: './animal-game.css',
})
export class AnimalGame {}
