import { Component, OnInit } from "@angular/core";
import { OSM_TILE_LAYER_URL } from "@yaga/leaflet-ng2";
import { Store } from "@ngrx/store";
import * as weather from "../actions/";
import * as R from "../reducers";
import { AppState, WeatherObject, SourcesConfig } from "../models";



@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css']
})
export class CultureComponent implements OnInit {

  public mashableList : SourcesConfig[] = [
    {id :  'mashable', label : 'Mashable'},
    { id : 'breitbart-news', label : 'Breitbart News'},
    {id : 'google-news', label : 'Google News'},
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
