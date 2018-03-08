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
import { WeatherService } from "../services/weather-api.service";
import { WeatherObject } from "../../models";
@Injectable()
export class WeatherMapEffects {
  @Effect()
  getWeatherData$: Observable<Action> = this.actions$
    .ofType(appActions.GET_WEATHER_DATA)
    .map((action: appActions.GetWeatherAction) => action.payload)
    .mergeMap(payload =>
      this.weatherService
        .getWeatherData(payload)
        .map((res: WeatherObject) => {
          return new appActions.GetWeatherSuccessAction(res);
        })
        .catch(() => of({ type: appActions.GET_WEATHER_DATA_FAILURE }))
    );

  constructor(
    private weatherService: WeatherService,
    private actions$: Actions
  ) {
    console.log("we hit effects module");
  }
}
