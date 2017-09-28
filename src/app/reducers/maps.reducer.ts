import { ActionReducer, Action } from '@ngrx/store';

import { GET_WEATHER_DATA, GET_WEATHER_DATA_SUCCESS, GET_WEATHER_DATA_FAILURE } from '../actions/actions';

export function  weatherData (state = [], action: Action){
	switch (action.type) {
		case GET_WEATHER_DATA:
			return [...state ];
        case GET_WEATHER_DATA_SUCCESS:
			return state;
	    case GET_WEATHER_DATA_FAILURE:
			return state;
		default:
			return state;
	}
}