import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as weather from "../actions/";
import * as R from "../reducers";
import { AppState, WeatherObject, SourcesConfig } from "../models";
import { EntertainmentSources } from "../app.sources";

@Component({
  selector: "app-entertainment",
  templateUrl: "./entertainment.component.html",
  styleUrls: ["./entertainment.component.css"]
})
export class EntertainmentComponent implements OnInit {
  public mashableList: SourcesConfig[] = EntertainmentSources;
  public sideMashList: SourcesConfig[] = [];

  public currentWeather: Object;

  constructor(private store: Store<AppState>) {
    this.sideMashList = this.mashableList.filter(s => s.id != "mashable");
  }

  ngOnInit() {}
}
