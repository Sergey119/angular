import { Component } from '@angular/core';
import { ICustom } from '../interfaces/interfaces';

@Component({
  selector: 'app-custom-component',
  templateUrl: './custom-component.component.html',
  styleUrls: ['./custom-component.component.css']
})
export class CustomComponentComponent {

  selectedCustom: ICustom;

  constructor() { }
 
  ngOnInit() {
  }

  update(custom:ICustom) {
    console.log(custom);
    alert("Custom")
  }
}
