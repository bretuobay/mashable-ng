import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as weather from "../../store/actions/";
import * as R from "../../store/reducers";
import { AppState, WeatherObject, SourcesConfig } from "../../models";
import { ScienceSources } from "../../app.sources";

@Component({
  selector: "app-science",
  templateUrl: "./science.component.html",
  styleUrls: ["./science.component.css"]
})
export class ScienceComponent implements OnInit {
  public mashableList: SourcesConfig[] = ScienceSources;
  public sideMashList: SourcesConfig[] = [];

  public currentWeather: Object;

  constructor(private store: Store<AppState>) {
    this.sideMashList = this.mashableList.filter(s => s.id != "mashable");
  }

  ngOnInit() {}
}
