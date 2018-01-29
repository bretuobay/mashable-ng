import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as weather from "../actions/";
import * as R from "../reducers";
import { AppState, WeatherObject, SourcesConfig } from "../models";
import { VideoSources } from "../app.sources";

@Component({
  selector: "app-videos",
  templateUrl: "./videos.component.html",
  styleUrls: ["./videos.component.css"]
})
export class VideosComponent implements OnInit {
  public mashableList: SourcesConfig[] = VideoSources;

  public sideMashList: SourcesConfig[] = [];

  public currentWeather: Object;

  constructor(private store: Store<AppState>) {
    this.sideMashList = this.mashableList.filter(s => s.id != "mashable");
  }

  ngOnInit() {}
}
