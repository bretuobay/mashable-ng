import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import { Store } from "@ngrx/store";
import * as weather from "../../store/actions/";
import * as R from "../../store/reducers";
import { AppState, Weather, SourcesConfiguration } from "../../models";
import { MainSources } from "../../app.sources";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  public mashableList: SourcesConfiguration[] = MainSources;
  public sideMashList: SourcesConfiguration[] = [];
  public name: string = "Kumasi";
  public lat: number = 48.5768558;
  public lng: number = 13.268283;
  public temperature: number | string;
  public humidity: number = 50;
  public cityToSearch = new FormControl();
  public currentWeather: Object;
  
  constructor(private store: Store<AppState>) {
    this.sideMashList = this.mashableList.filter(s => s.id != "mashable");
    this.cityToSearch.setValue(this.name);

    this.store.dispatch(new weather.GetWeatherAction(this.cityToSearch.value));

    this.cityToSearch.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(city => {
        this.store.dispatch(new weather.GetWeatherAction(city));
      });
  }

  public checkMapParametersExist(weatherData: Weather) {
    if (weatherData && weatherData.hasOwnProperty("coord")) {
      this.setMapParamters(weatherData);
    }
  }

  public onGetWeather(city: string) {
    if (city.length >= 2)
      this.store.dispatch(new weather.GetWeatherAction(city));
  }

  ngOnInit() {
    this.store.select(R.getweatherData).subscribe(data => {
      this.checkMapParametersExist(data);
    });
  }

  private setMapParamters(weatherData: Weather) {
    const {name, coord, main} = weatherData;
    this.name = name;
    this.lat = coord.lat;
    this.lng = coord.lon;
    this.temperature = (this.roundN(main.temp, 2) - 273.15).toFixed(2);
    this.humidity = main.humidity;
  }

  private roundN(numInput: number, decimalPlaces: number): number {
    const tempVal =
      Math.round(numInput * Math.pow(10, decimalPlaces)) /
      Math.pow(10, decimalPlaces);

    return parseFloat(tempVal.toFixed(decimalPlaces));
  }
}
