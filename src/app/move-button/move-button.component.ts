import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CustomComponentComponent } from '../custom-component/custom-component.component';
import { ICustom } from '../interfaces/interfaces';

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

  constructor() { }

  @Input() custom:ICustom;
  @Output() outChange: EventEmitter<ICustom> = new EventEmitter<ICustom>();

  update() {
    this.outChange.emit(this.custom);
  }
}
