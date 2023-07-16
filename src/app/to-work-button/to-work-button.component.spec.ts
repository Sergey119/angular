import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToWorkButtonComponent } from './to-work-button.component';

describe('ToWorkButtonComponent', () => {
  let component: ToWorkButtonComponent;
  let fixture: ComponentFixture<ToWorkButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ToWorkButtonComponent]
    });
    fixture = TestBed.createComponent(ToWorkButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
