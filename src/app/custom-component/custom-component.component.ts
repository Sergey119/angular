import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent {

  message:string = '';
  acs:string[]=['Вернуть в план','Возврат']

  constructor() { }
 
  ngOnInit() {
  }

  update(o: string) {
    this.message = o;
    console.log(this.message);
  }

  rename(o: any) {
    console.log("Переим",o);
  }

  work(o: any) {
    console.log("В р",o);
  }
}
