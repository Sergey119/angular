import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateRangeComponent } from './date-range.component';

describe('DateRangeComponent', () => {
  let component: DateRangeComponent;
  let fixture: ComponentFixture<DateRangeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DateRangeComponent]
    });
    fixture = TestBed.createComponent(DateRangeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
