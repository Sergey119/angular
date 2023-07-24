// Таблица со значениями

import {Component, OnInit} from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import {MatTableModule} from '@angular/material/table';
import { MyService } from '../service.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
})

export class TableComponent implements OnInit{

  public data1: any = "Undefined start data";
  public data2: any = "Undefined end data";
  public data3: any = "Undefined dropdown action";
  public data4: any = "Undefined default action";

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
    this.myService.methodD$?.subscribe((data4) => {
      this.data4 = data4;
      console.log("data4");
    });
  }

  
}