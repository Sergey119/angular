import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-start-date-button',
  templateUrl: './start-date-button.component.html',
  styleUrls: ['./start-date-button.component.css']
})
export class StartDateButtonComponent implements OnInit{
  
  dateChange($event: { target: { value: any; }; }){
    console.log($event.target.value);
  }

  ariaLabel: string = "";
  currentAct: string = "";

  ngOnInit(): void {};

  get(s: string): void {
    console.log(s);
    this.currentAct = s;
  }
}
