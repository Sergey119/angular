import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TuneComponent } from './tune.component';

describe('TuneComponent', () => {
  let component: TuneComponent;
  let fixture: ComponentFixture<TuneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TuneComponent]
    });
    fixture = TestBed.createComponent(TuneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
