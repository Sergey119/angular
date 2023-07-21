import { Component, OnInit } from '@angular/core';
import { MyService } from '../service.service';

@Component({
  selector: 'app-table-imitation',
  templateUrl: './table-imitation.component.html',
  styleUrls: ['./table-imitation.component.css']
})
export class TableImitationComponent implements OnInit{
  public data1: any;
  public data2: any;
  public data3: any;

  public constructor(private myService: MyService) {}

  ngOnInit() {
    this.myService.methodS$?.subscribe((data1) => {
      this.data1 = data1;
    });
    this.myService.methodE$?.subscribe((data2) => {
      this.data2 = data2;
    });
    this.myService.methodB$?.subscribe((data3) => {
      this.data3 = data3;
    });
  }

}
