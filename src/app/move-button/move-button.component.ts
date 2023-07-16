import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-move-button',
  templateUrl: './move-button.component.html',
  styleUrls: ['./move-button.component.css']
})
export class MoveButtonComponent implements OnInit{
  act: string = "move";
  currentAct: string = '';

  ngOnInit(): void {};

  get(s: string): void {
    console.log(s);
    this.currentAct = s;
  }

}