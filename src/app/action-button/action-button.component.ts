import {Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css'],
})
export class ActionButtonComponent implements OnInit{
  currentAct: string = '';

  ngOnInit(): void {};

  acts = ['Вернуть в план','Возврат'];

  get(s: string): void {
    console.log(s);
    this.currentAct = s;
  }

}