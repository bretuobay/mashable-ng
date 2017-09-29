
import { Action } from '@ngrx/store';

export const GET_WEATHER_DATA = '[Weather] Get Weather';
export const GET_WEATHER_DATA_SUCCESS = '[Weather] Get Weather Success';
export const GET_WEATHER_DATA_FAILURE = '[Weather] Get Weather Success';

export class GetWeatherAction implements Action {
    readonly type = GET_WEATHER_DATA;

    constructor(public payload: any[]) {}
}


export class GetWeatherSuccessAction implements Action {
    readonly type = GET_WEATHER_DATA_SUCCESS;

    constructor(public payload: any[]) {}
}


export class GetWeatherFailureAction implements Action {
    readonly type = GET_WEATHER_DATA_FAILURE;

    constructor(public payload: any[]) {}
}

export type Actions =
| GetWeatherAction
| GetWeatherSuccessAction
| GetWeatherFailureAction