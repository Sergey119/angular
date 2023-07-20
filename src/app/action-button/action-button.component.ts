import {Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css'],
})
export class ActionButtonComponent implements OnInit{
  currentAct: string = '';
  @Input() acts:string[] = [];

  ngOnInit(): void {
    console.log(this.acts)
  };

  get(s: string): void {
    console.log(s);
    this.currentAct = s;
  }

}