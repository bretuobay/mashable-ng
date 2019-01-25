import {WeatherActions} from "../actions/weather-actions";
import { GET_WEATHER_DATA_FAILURE, GET_WEATHER_DATA, GET_WEATHER_DATA_SUCCESS } from "../../constants";
import { Weather } from "../../models";

export function weatherData(state: Weather, action: WeatherActions) {
  switch (action.type) {
    case GET_WEATHER_DATA:
      return Object.assign({}, action.payload);
    case GET_WEATHER_DATA_SUCCESS:
      return Object.assign({}, action.payload);
    case GET_WEATHER_DATA_FAILURE:
      return state;
    default:
      return state;
  }
}
