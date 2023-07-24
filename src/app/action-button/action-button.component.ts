import {Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MyService } from '../service.service';

@Component({
  selector: 'app-action-button',
  templateUrl: './action-button.component.html',
  styleUrls: ['./action-button.component.css'],
})
export class ActionButtonComponent implements OnInit{

  public constructor(private myService: MyService) {};

  @Output() outChange: EventEmitter<string> = new EventEmitter<string>();
  @Input() acts:string[] = [];
  @Input() text = "";
  custom: string = ""

  ngOnInit(){}

  change(s: string){
    console.log(s);
    this.custom = "custom";
    this.outChange.emit(this.custom);
    this.myService.methodD$?.next(s);
    console.log("change", s);
  }

}