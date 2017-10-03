import { Component, OnInit } from "@angular/core";
import { OSM_TILE_LAYER_URL } from "@yaga/leaflet-ng2";
import { Store } from "@ngrx/store";
import * as weather from "../actions/actions";
import * as R from "../reducers";

import { AppState, WeatherObject } from "../models";

@Component({
  selector: "app-map-square",
  templateUrl: "./map-square.component.html",
  styleUrls: ["./map-square.component.css"]
})
export class MapSquareComponent implements OnInit {
  public editable: boolean = true;
  public name: string = "Passau";
  public lat: number = 48.5768558;
  public lng: number = 13.268283;
  public citiesList = [
    "Kumasi",
    "London",
    "Berlin",
    "New York",
    "Turin",
    "Milan",
    "Tokyo",
    "Moscow"
  ];

  public currentWeather: Object;
  constructor(private store: Store<AppState>) {
    this.store.select(R.getweatherData).subscribe(data => {
      this.checkMapParametersExist(this.destructDataByCity(data));
    });
  }

  public checkMapParametersExist(weatherData: WeatherObject) {
    if (weatherData && weatherData.hasOwnProperty("coord")) {
      this.setMapParamters(weatherData);
    }
  }

  public destructDataByCity(weatherProps) {
    let data: WeatherObject;
    return (data = weatherProps);
  }

  public onClickGetWeather(event: MouseEvent) {
    let city = this.citiesList[
      Math.floor(Math.random() * this.citiesList.length)
    ];

    this.store.dispatch(new weather.GetWeatherAction(city));

    this.store.dispatch(new weather.GetWeatherSuccessAction(null));
  }

  ngOnInit() {}

  private setMapParamters(weatherData: WeatherObject) {
    this.name = weatherData.name;
    this.lat = weatherData.coord.lat;
    this.lng = weatherData.coord.lon;
  }
}
