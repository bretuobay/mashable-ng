import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-light-dashboard',
  templateUrl: './light-dashboard.component.html',
  styleUrls: ['./light-dashboard.component.css']
})
export class LightDashboardComponent implements OnInit {
     
  date: Date;

  required = false;
  
    hasError = false;
    error = 'The input has an error!';
  
    days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];

  constructor() { }

  
  
    gotoDate() {
      this.date = new Date(2005, 10, 9);
    }

  ngOnInit() {
  }

}
