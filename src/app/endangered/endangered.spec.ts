import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Endangered } from './endangered';

describe('Endangered', () => {
  let component: Endangered;
  let fixture: ComponentFixture<Endangered>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Endangered],
    }).compileComponents();

    fixture = TestBed.createComponent(Endangered);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
