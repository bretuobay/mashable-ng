import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { AppService } from '../app.service';

@Component({
  selector: 'app-map-box',
  templateUrl: './map-box.component.html',
  styleUrls: ['./map-box.component.css']
})
export class MapBoxComponent implements OnInit {

  constructor ( private appservice : AppService) {

   }


  ngOnInit() {
    var map = new mapboxgl.Map({
      container: 'mapboxId',
      style: 'mapbox://styles/mapbox/streets-v10',
      zoom: 5,
      center: [-78.880453, 42.897852]
    });

    
    this.appservice.map = map;
  }

}
