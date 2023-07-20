import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent {

  message:string = '';

  constructor() { }
 
  ngOnInit() {
  }

  update(o: string) {
    this.message = o;
    console.log(this.message);
  }
}
