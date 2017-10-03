import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-map-pop',
  templateUrl: './map-pop.component.html',
  styleUrls: ['./map-pop.component.css']
})
export class MapPopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  onButtonClick(event: MouseEvent){
    console.log(event,' We go get there! ')
  }

}
