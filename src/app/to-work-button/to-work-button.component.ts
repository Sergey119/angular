import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-to-work-button',
  templateUrl: './to-work-button.component.html',
  styleUrls: ['./to-work-button.component.css']
})
export class ToWorkButtonComponent implements OnInit{
  act: string = "to work";
  currentAct: string = '';

  ngOnInit(): void {};

  get(s: string): void {
    console.log(s);
    this.currentAct = s;
  }

}
