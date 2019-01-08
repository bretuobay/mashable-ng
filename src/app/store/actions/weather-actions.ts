import { Action } from "@ngrx/store";
import { WeatherObject } from "../../models";
import { GET_WEATHER_DATA,GET_WEATHER_DATA_FAILURE,GET_WEATHER_DATA_SUCCESS } from "../../constants";
export class GetWeatherAction implements Action {
  readonly type = GET_WEATHER_DATA;
  constructor(public payload: string) {}
}

export class GetWeatherSuccessAction implements Action {
  readonly type = GET_WEATHER_DATA_SUCCESS;
  constructor(public payload: WeatherObject) {}
}

export class GetWeatherFailureAction implements Action {
  readonly type = GET_WEATHER_DATA_FAILURE;
  constructor(public payload: any) {}
}

export type WeatherActions =
  | GetWeatherAction
  | GetWeatherSuccessAction
  | GetWeatherFailureAction;
