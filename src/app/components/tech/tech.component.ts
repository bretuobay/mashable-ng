import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as weather from "../../store/actions/";
import * as R from "../../store/reducers";
import { AppState, WeatherObject, SourcesConfig } from "../../models";
import { TechnologySources } from "../../app.sources";

@Component({
  selector: "app-tech",
  templateUrl: "./tech.component.html",
  styleUrls: ["./tech.component.css"]
})
export class TechComponent implements OnInit {
  public mashableList: SourcesConfig[] = TechnologySources;
  public sideMashList: SourcesConfig[] = [];

  public currentWeather: Object;

  constructor(private store: Store<AppState>) {
    this.sideMashList = this.mashableList.filter(s => s.id != "mashable");
  }

  ngOnInit() {}
}