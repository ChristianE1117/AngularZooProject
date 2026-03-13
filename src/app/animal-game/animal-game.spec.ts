import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnimalGame } from './animal-game';

describe('AnimalGame', () => {
  let component: AnimalGame;
  let fixture: ComponentFixture<AnimalGame>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AnimalGame],
    }).compileComponents();

    fixture = TestBed.createComponent(AnimalGame);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
