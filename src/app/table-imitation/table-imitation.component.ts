import { Component } from '@angular/core';
import { MyService } from '../service.service';

@Component({
  selector: 'app-table-imitation',
  templateUrl: './table-imitation.component.html',
  styleUrls: ['./table-imitation.component.css']
})
export class TableImitationComponent {
  public data1: any;
  public data2: any;

  public constructor(private myService: MyService) {
    this.myService.methodS$.subscribe((data1) => {
      this.data1 = data1;
    });
    this.myService.methodE$.subscribe((data2) => {
      this.data2 = data2;
    });
  }


}
