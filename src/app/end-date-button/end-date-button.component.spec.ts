import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndDateButtonComponent } from './end-date-button.component';

describe('EndDateButtonComponent', () => {
  let component: EndDateButtonComponent;
  let fixture: ComponentFixture<EndDateButtonComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EndDateButtonComponent]
    });
    fixture = TestBed.createComponent(EndDateButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
