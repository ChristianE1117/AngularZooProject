import { Component, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api.service';
import { toArray } from 'rxjs';

@Component({
  selector: 'app-animal',
  imports: [],
  templateUrl: './animal.html',
  styleUrl: './animal.css',
})

export class Animal {

    animals: AnimalObject[] = []

    constructor(private api: ApiService, private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.loadAnimals();
    }

    private loadAnimals() {
        this.api.getAnimals().subscribe(res => {
                this.animals = res as AnimalObject[];
                this.cdr.detectChanges();
            }
        )
    }
}

class AnimalObject {
    constructor(
        public animalID: number, 
        public name: string, 
        public description: string,
        public habitat: string,
        public size: string,
        public imageUrl: string ) {
    }
}