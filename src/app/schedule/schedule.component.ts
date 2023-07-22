// Таблица со значениями

import {Component, OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MyService } from '../service.service';


@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
})

export class TableDynamicObservableDataExample implements OnInit{

  public data1: any;
  public data2: any;
  public data3: any;

  constructor(private myService: MyService) {}

  ngOnInit() {
    this.myService.methodS$?.subscribe((data1) => {
      this.data1 = data1;
      console.log("data1");
    });
    this.myService.methodE$?.subscribe((data2) => {
      this.data2 = data2;
      console.log("data2");
    });
    this.myService.methodB$?.subscribe((data3) => {
      this.data3 = data3;
      console.log("data3");
    });
  }

  displayedColumns: string[] = ['name'];
  
}