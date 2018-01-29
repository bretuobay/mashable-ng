import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as weather from "../actions/";
import * as R from "../reducers";
import { AppState, WeatherObject, SourcesConfig } from "../models";
import { CultureSources } from "../app.sources";



@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css']
})
export class CultureComponent implements OnInit {

  public mashableList: SourcesConfig[] = CultureSources;

  public sideMashList: SourcesConfig[] = [];


  public currentWeather: Object;

  constructor(private store: Store<AppState>) {
    this.sideMashList = this.mashableList.filter(s => s.id != 'mashable');
  }
  ngOnInit() {
  }

}
