// Таблица со значениями

import { Component } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';

export interface ScheduleComponent {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}

const ELEMENT_DATA: ScheduleComponent[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
];

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css'],
  standalone: true,
  imports: [MatButtonModule, MatTableModule],
})
export class TableDynamicObservableDataExample {
  displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}

class ExampleDataSource extends DataSource<ScheduleComponent> {
  private _dataStream = new ReplaySubject<ScheduleComponent[]>();

  constructor(initialData: ScheduleComponent[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<ScheduleComponent[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: ScheduleComponent[]) {
    this._dataStream.next(data);
  }
}