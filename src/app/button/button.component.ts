import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyService } from '../service.service';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent implements OnInit{

  @Input() classname = "button-gray";
  @Input() text = "";

  act: string = "default-button";
  currentAct: string = '';

  get(s: string): void {
    console.log(s);
    this.currentAct = s;
  }
  
  ngOnInit(){
    this.text;
  }

  public constructor(private myService: MyService) {};

  custom: string = ""

  @Output() outChange: EventEmitter<string> = new EventEmitter<string>();

  change(){
    this.custom = "custom";
    this.outChange.emit(this.custom);
    this.myService.methodB$?.next(this.text);
    console.log("change", this.text);
  }

}
