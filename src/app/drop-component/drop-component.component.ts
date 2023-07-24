import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyService } from '../service.service';

@Component({
  selector: 'app-drop-component',
  templateUrl: './drop-component.component.html',
  styleUrls: ['./drop-component.component.css']
})
export class DropComponentComponent  implements OnInit{

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
