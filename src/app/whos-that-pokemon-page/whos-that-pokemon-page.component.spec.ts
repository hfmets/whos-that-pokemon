import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhosThatPokemonPageComponent } from './whos-that-pokemon-page.component';

describe('WhosThatPokemonPageComponent', () => {
  let component: WhosThatPokemonPageComponent;
  let fixture: ComponentFixture<WhosThatPokemonPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WhosThatPokemonPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WhosThatPokemonPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
