import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MyService } from '../service.service';

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

  // currentStart: object;
  // currentEnd: object;
  // startChange($event: { target: { value: any; }; }): void {
  //   console.log($event);
  //   this.currentStart = $event;
  // };
  // endChange($event: { target: { value: any; }; }): void {
  //   console.log($event);
  //   this.currentEnd = $event;
  // }

  // currentStart: object;

  // dateInput($event: { target: { value: any; }; }): void {
  //   console.log($event);
  //   this.currentStart = $event;
  // };

  // onSelected(event: any, flag: boolean): void
  // {
  //   let search_params = this.bodyResolution.search_params.getValue();
  //   if (flag === true)
  //   {
  //     search_params.period_start = 
  //   }
  //   this.bodyResolution.search_params.next(search_params)
  // }

  date1: any;
  date2: any;
  
  ngOnInit(){
    this.date1;
    this.date2;
  }

  public constructor(private myService: MyService) {
    this.myService.methodS(this.date1);
    console.log(this.date1);
    this.myService.methodE(this.date2);
    console.log(this.date2);
  };
  
}