import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import "rxjs/add/operator/debounceTime";
import "rxjs/add/operator/distinctUntilChanged";
import { Store } from "@ngrx/store";
import * as weather from "../../store/actions/";
import * as R from "../../store/reducers";
import { AppState, WeatherObject, SourcesConfig } from "../../models";
import { MainSources } from "../../app.sources";

@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styleUrls: ["./main.component.css"]
})
export class MainComponent implements OnInit {
  public mashableList: SourcesConfig[] = MainSources;
  public sideMashList: SourcesConfig[] = [];
  public name: string = "Kumasi";
  public lat: number = 48.5768558;
  public lng: number = 13.268283;
  public temperature: string = "";
  public humidity: number = 50;
  public cityToSearch = new FormControl();
  public currentWeather: Object;
  constructor(private store: Store<AppState>) {
    this.sideMashList = this.mashableList.filter(s => s.id != "mashable");

    this.store.select(R.getweatherData).subscribe(data => {
      this.checkMapParametersExist(this.destructDataByCity(data));
    });

    // alternative approach
    // this.store.select(s => s.weatherData).subscribe(data => {
    //   this.checkMapParametersExist(this.destructDataByCity(data));
    // });
    // you can possible set name on input
    this.cityToSearch.setValue(this.name);

    this.store.dispatch(new weather.GetWeatherAction(this.cityToSearch.value));

    this.cityToSearch.valueChanges
      .debounceTime(500)
      .distinctUntilChanged()
      .subscribe(city => {
        this.store.dispatch(new weather.GetWeatherAction(city));
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

  public onGetWeather(city: string) {
    if (city.length > 3)
      this.store.dispatch(new weather.GetWeatherAction(city));
  }

  ngOnInit() {}

  private setMapParamters(weatherData: WeatherObject) {
    this.name = weatherData.name;
    this.lat = weatherData.coord.lat;
    this.lng = weatherData.coord.lon;
    this.temperature = (this.roundN(weatherData.main.temp, 2) - 273.15).toFixed(
      2
    );
    this.humidity = weatherData.main.humidity;
  }

  private roundN(numInput: number, decimalPlaces: number): number {
    let tempVal =
      Math.round(numInput * Math.pow(10, decimalPlaces)) /
      Math.pow(10, decimalPlaces);

    return parseFloat(tempVal.toFixed(decimalPlaces));
  }
}
