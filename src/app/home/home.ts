import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Animal } from '../Animal/animal';

@Component({
  selector: 'app-home',
  imports: [Animal],
  templateUrl: './home.html',
  styleUrl: './home.css',
})

export class Home {

  constructor(private api: ApiService) {
  }

  getAnimals() {
    this.api.getAnimals()
  }
}
