import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toArray";
import { of } from "rxjs/observable/of";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import * as appActions from "../actions/";
import { GET_WEATHER_DATA, GET_WEATHER_DATA_FAILURE} from "../../constants"
import { WeatherService } from "../services/weather-api.service";
import { WeatherObject } from "../../models";
@Injectable()
export class WeatherMapEffects {
  @Effect()
  getWeatherData$: Observable<Action> = this.actions$
    .ofType(GET_WEATHER_DATA)
    .map((action: appActions.GetWeatherAction) => action.payload)
    .mergeMap(payload =>
      this.weatherService
        .getWeatherData(payload)
        .map((res: WeatherObject) => {
          return new appActions.GetWeatherSuccessAction(res);
        })
        .catch(() => of({ type: GET_WEATHER_DATA_FAILURE }))
    );

  constructor(private weatherService: WeatherService, private actions$: Actions) {}
}
