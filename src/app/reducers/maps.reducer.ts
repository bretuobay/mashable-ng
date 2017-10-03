import { ActionReducer, Action } from '@ngrx/store';

import * as weather from '../actions/actions';

import {WeatherObject } from '../models';

export function  weatherData (state: WeatherObject , action: weather.Actions){
	switch (action.type) {

		case weather.GET_WEATHER_DATA:
				 return  Object.assign({}, action.payload);
				 
		case weather.GET_WEATHER_DATA_SUCCESS:
				return  Object.assign({}, action.payload);

	  case weather.GET_WEATHER_DATA_FAILURE:
			return state;

		default:
			return state;
	}
}