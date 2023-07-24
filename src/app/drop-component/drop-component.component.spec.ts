import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DropComponentComponent } from './drop-component.component';

describe('DropComponentComponent', () => {
  let component: DropComponentComponent;
  let fixture: ComponentFixture<DropComponentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DropComponentComponent]
    });
    fixture = TestBed.createComponent(DropComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
