import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slot',
  templateUrl: './slot.component.html',
  styleUrls: ['./slot.component.css']
})
export class SlotComponent implements OnInit {
  multiSelect: boolean = true;
  value: any;

  title = 'ng-calendar-demo';
  selectedDate = new Date('2019/09/26');
  startAt = new Date('2019/09/11');
  minDate = new Date('2019/09/14');
  maxDate = new Date(new Date().setMonth(new Date().getMonth() + 1));
  year: any;
  DayAndDate: any;

  constructor() {
    this.onSelect(this.selectedDate);
  }

  onSelect(event: any) {
    console.log(event);
    this.selectedDate = event;
    const dateString = event.toDateString();
    const dateValue = dateString.split(' ');
    this.year = dateValue[3];
    this.DayAndDate = dateValue[0] + ',' + ' ' + dateValue[1] + ' ' + dateValue[2];
  }

  myDateFilter = (d: Date): boolean => {
    const day = d.getDay();
    // Prevent Saturday and Sunday from being selected.
    return day !== 0 && day !== 6;
  }

  ngOnInit(): void {
  }

}
