import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalorieCalculatorComponent } from './calorie-calculator.component';

describe('CalorieCalculatorComponent', () => {
  let component: CalorieCalculatorComponent;
  let fixture: ComponentFixture<CalorieCalculatorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CalorieCalculatorComponent]
    });
    fixture = TestBed.createComponent(CalorieCalculatorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});