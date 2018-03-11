import { Action } from "@ngrx/store";
import { AppState, WeatherObject } from "../../models";

import {
  GET_WEATHER_DATA,
  GET_WEATHER_DATA_FAILURE,
  GET_WEATHER_DATA_SUCCESS
} from "../../constants";
export class GetWeatherAction implements Action {
  readonly type = GET_WEATHER_DATA;

  constructor(public payload: any) {}
}

export class GetWeatherSuccessAction implements Action {
  readonly type = GET_WEATHER_DATA_SUCCESS;

  constructor(public payload: any) {}
}

export class GetWeatherFailureAction implements Action {
  readonly type = GET_WEATHER_DATA_FAILURE;

  constructor(public payload: any) {}
}

export type WeatherActions =
  | GetWeatherAction
  | GetWeatherSuccessAction
  | GetWeatherFailureAction;
