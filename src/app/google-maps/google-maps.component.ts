import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.css']
})
export class GoogleMapsComponent implements OnInit {
  // See example of adding markers http://plnkr.co/edit/YX7W20?p=preview
  public lat: number = 1.0546279422758869;
  public lng: number = 18.45703125;

  constructor() { }

  ngOnInit() {
  }

}
