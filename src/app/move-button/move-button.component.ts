import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-move-button',
  templateUrl: './move-button.component.html',
  styleUrls: ['./move-button.component.css']
})
export class MoveButtonComponent implements OnInit{

  @Input() classname = "white";
  @Input() text = "";

  act: string = "move";
  currentAct: string = '';

  ngOnInit(): void {
    console.log('classname', this.classname)
  };

  get(s: string): void {
    console.log(s);
    this.currentAct = s;
  }

  constructor() { }

  custom: string = ""

  @Output() outChange: EventEmitter<string> = new EventEmitter<string>();

  change(){
    this.custom = "custom";
    this.outChange.emit(this.custom)
  }
}
