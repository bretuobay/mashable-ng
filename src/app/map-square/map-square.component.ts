import { Component, OnInit } from '@angular/core';
import { OSM_TILE_LAYER_URL }   from '@yaga/leaflet-ng2';
import { Store } from '@ngrx/store';
import { GET_WEATHER_DATA} from '../actions/actions';
import * as fromRoot from '../reducers';
interface AppState {
  weatherData: any;
}

@Component({
  selector: 'app-map-square',
  templateUrl: './map-square.component.html',
  styleUrls: ['./map-square.component.css']
})
export class MapSquareComponent implements OnInit {
  public editable: boolean = false;
  public name: string = 'Passau';
  public lat: number = 48.5768558;
  public lng: number = 13.268283;
  public currentWeather : any[];
  constructor(private store: Store<AppState>) {
    
    this.store.dispatch({ type: GET_WEATHER_DATA });

    this.store.select('weatherData').subscribe( data =>{
      console.log(data)
        this.currentWeather = data;
    });

   }

  ngOnInit() {
  }

}
