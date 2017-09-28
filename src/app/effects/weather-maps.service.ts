import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import { GET_WEATHER_DATA, GET_WEATHER_DATA_FAILURE, GET_WEATHER_DATA_SUCCESS } from '../actions/actions';

const API_KEY = 'db9457193cdbb7db418c6749874fb68b'
const API_URL_ENDPOINT = `http://api.openweathermap.org/data/2.5`
const city = 'Kumasi';
@Injectable()
export class WeatherMapEffects {


  @Effect() getWeatherData$ = this.actions$
  
  .ofType(GET_WEATHER_DATA)
 
  .map(action => JSON.stringify(action.payload))
  .switchMap(payload => this.http.get(`/weather?q=${city}&appid=${API_KEY}`, payload)
    
    .map(res => ({ type: GET_WEATHER_DATA_SUCCESS, payload: res.json() }))
    
    .catch(() => Observable.of({ type: GET_WEATHER_DATA_FAILURE }))
  );


  constructor(
    private http: Http,
    private actions$: Actions
  ) { 
    console.log('we hit effects module')
  }

}
