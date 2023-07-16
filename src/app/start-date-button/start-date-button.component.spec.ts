import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StartDateButtonComponent } from './start-date-button.component';

describe('StartDateButtonComponent', () => {
  let component: StartDateButtonComponent;
  let fixture: ComponentFixture<StartDateButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [StartDateButtonComponent]
    });
    fixture = TestBed.createComponent(StartDateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
