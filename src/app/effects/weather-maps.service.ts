import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toArray";
import { of } from "rxjs/observable/of";
import "rxjs/add/operator/switchMap";
import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import * as appActions from "../actions/";

const API_KEY = "db9457193cdbb7db418c6749874fb68b";
const API_URL_ENDPOINT = `http://api.openweathermap.org/data/2.5`;

@Injectable()
export class WeatherMapEffects {
  @Effect()
  getWeatherData$: Observable<Action> = this.actions$
    .ofType(appActions.GET_WEATHER_DATA)
    .map((action: appActions.GetWeatherAction) => action.payload)
    .mergeMap(payload =>
      this.http
        .get(API_URL_ENDPOINT + `/weather?q=${payload}&appid=${API_KEY}`)
        .map((res: Response) => {
          return new appActions.GetWeatherSuccessAction(res.json());
        })
        .catch(() => of({ type: appActions.GET_WEATHER_DATA_FAILURE }))
    );

  constructor(private http: Http, private actions$: Actions) {
    console.log("we hit effects module");
  }
}
