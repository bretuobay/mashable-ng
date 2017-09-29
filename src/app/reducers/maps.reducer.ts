import { ActionReducer, Action } from '@ngrx/store';

import * as weather from '../actions/actions';

export function  weatherData (state = [], action: weather.Actions){
	switch (action.type) {
		case weather.GET_WEATHER_DATA:
			return [ ...action.payload  ];
        case weather.GET_WEATHER_DATA_SUCCESS:
			return state;
	    case weather.GET_WEATHER_DATA_FAILURE:
			return state;
		default:
			return state;
	}
}