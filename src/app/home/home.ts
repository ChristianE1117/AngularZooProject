import { Component } from '@angular/core';
import { ApiService } from '../api.service';
import { Animal } from '../Animal/animal';
import { MatTabsModule } from '@angular/material/tabs';
import { Observable, fromEvent, Subscription  } from 'rxjs';

@Component({
  selector: 'app-home',
  imports: [Animal, MatTabsModule],
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
