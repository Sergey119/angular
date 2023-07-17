import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf, JsonPipe} from '@angular/common';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatNativeDateModule} from '@angular/material/core';

@Component({
  selector: 'app-date-range',
  templateUrl: './date-range.component.html',
  styleUrls: ['./date-range.component.css']
})
export class DateRangeComponent implements OnInit{
  range = new FormGroup({
    start: new FormControl<Date | null>(null),
    end: new FormControl<Date | null>(null),
  });

  currentStart: object;
  currentEnd: object;

  startChange($event: { target: { value: any; }; }): void {
    console.log($event);
    this.currentStart = $event;
  };
  
  endChange($event: { target: { value: any; }; }): void {
    console.log($event);
    this.currentEnd = $event;
  }

  ngOnInit(): void {};
}