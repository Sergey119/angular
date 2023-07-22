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

  currentStyles: Record<string, string> = {'margin-right': '400px'};

  date1: any;
  date2: any;
  
  ngOnInit(){
    this.date1;
    this.date2;
  }

  public constructor(private myService: MyService) {};

  changeS(e: any){
    this.myService.methodS$?.next(this.date1);
    console.log("changeS", e, this.date1)
  }

  changeE(e: any){
    this.myService.methodE$?.next(this.date2);
    console.log("changeE", e, this.date2)
  }
  
}