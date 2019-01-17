import { ActionReducer, Action } from "@ngrx/store";

import * as weather from "../actions/weather-actions";
import * as actionTypes from "../../constants";

import { Weather } from "../../models";

export function weatherData(
  state: Weather,
  action: weather.WeatherActions
) {
  switch (action.type) {
    case actionTypes.GET_WEATHER_DATA:
      return Object.assign({}, action.payload);

    case actionTypes.GET_WEATHER_DATA_SUCCESS:
      return Object.assign({}, action.payload);

    case actionTypes.GET_WEATHER_DATA_FAILURE:
      return state;

    default:
      return state;
  }
}
