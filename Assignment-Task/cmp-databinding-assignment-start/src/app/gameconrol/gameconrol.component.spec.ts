import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameconrolComponent } from './gameconrol.component';

describe('GameconrolComponent', () => {
  let component: GameconrolComponent;
  let fixture: ComponentFixture<GameconrolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GameconrolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GameconrolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
