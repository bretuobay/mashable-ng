import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import * as weather from "../store/actions/";
import * as R from "../store/reducers";
import { AppState, WeatherObject, SourcesConfig } from "../models";
import { BusinessSources } from "../app.sources";



@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

public mashableList : SourcesConfig[] = BusinessSources;

public sideMashList  : SourcesConfig[] = [];


public currentWeather: Object;

constructor(private store: Store<AppState>) {
 this.sideMashList = this.mashableList.filter( s => s.id!='mashable');
}

  ngOnInit() {
  }

}
