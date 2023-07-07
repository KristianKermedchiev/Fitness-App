import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WeightByDayComponent } from './weight-by-day.component';

describe('WeightByDayComponent', () => {
  let component: WeightByDayComponent;
  let fixture: ComponentFixture<WeightByDayComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [WeightByDayComponent]
    });
    fixture = TestBed.createComponent(WeightByDayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
