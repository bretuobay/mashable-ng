import { Component, OnInit } from "@angular/core";
import { OSM_TILE_LAYER_URL } from "@yaga/leaflet-ng2";
import { Store } from "@ngrx/store";
import * as weather from "../actions/";
import * as R from "../reducers";
import { AppState, WeatherObject, SourcesConfig } from "../models";



@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent implements OnInit {

  public mashableList : SourcesConfig[] = [
    {id :  'mashable', label : 'Mashable'},
    { id : 'daily-mail', label : 'Daily Mail'},
    {id : 'football-italia', label : 'Footbal Italia'},
    { id : 'business-insider-uk' , label : 'Business Insider UK '}
];
public sideMashList  : SourcesConfig[] = [];


public currentWeather: Object;

constructor(private store: Store<AppState>) {
 this.sideMashList = this.mashableList.filter( s => s.id!='mashable');
}

  ngOnInit() {
  }

}
