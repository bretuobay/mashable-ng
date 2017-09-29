import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import * as weather from '../actions/actions';

const API_KEY = 'db9457193cdbb7db418c6749874fb68b'
const API_URL_ENDPOINT = `http://api.openweathermap.org/data/2.5`
const city = 'Kumasi';
@Injectable()
export class WeatherMapEffects {

  
  @Effect() getWeatherData$ : Observable<Action> = this.actions$
  .ofType(weather.GET_WEATHER_DATA)
  .map((action : weather.GetWeatherAction) => action.payload)
  .switchMap(payload => this.http.get(API_URL_ENDPOINT+`/weather?q=${city}&appid=${API_KEY}`) 
  .toArray()
    .map(res => new weather.GetWeatherAction(res))
    .catch(() => of({ type: weather.GET_WEATHER_DATA_FAILURE }))
  );


  constructor(
    private http: Http,
    private actions$: Actions
  ) { 
    console.log('we hit effects module')
  }

}
