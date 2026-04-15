import { Component, ChangeDetectorRef } from '@angular/core';
import { ApiService } from '../api.service';
import { FormsModule } from '@angular/forms'; // Add this import
import { toArray } from 'rxjs';
import { Observable, fromEvent, Subscription  } from 'rxjs';

@Component({
  selector: 'app-animal',
  imports: [FormsModule],
  templateUrl: './animal.html',
  styleUrl: './animal.css',
})

export class Animal {

    animals: AnimalObject[] = [];
    searchString: string = "";

    constructor(private api: ApiService, private cdr: ChangeDetectorRef) {
    }

    ngOnInit() {
        this.loadAnimals();
    }

    inputChanged($event: string) {
        this.api.getAnimals().subscribe(res => {
            const allAnimals = res as AnimalObject[];
            this.animals = allAnimals.filter(animal =>
                animal.name.toLowerCase().includes($event.toLowerCase())
                );
            this.cdr.detectChanges();
    });
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