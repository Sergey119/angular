import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableImitationComponent } from './table-imitation.component';

describe('TableImitationComponent', () => {
  let component: TableImitationComponent;
  let fixture: ComponentFixture<TableImitationComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableImitationComponent]
    });
    fixture = TestBed.createComponent(TableImitationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
