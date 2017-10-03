
import {
    ActionReducerMap,
    createSelector,
    createFeatureSelector,
    compose,
    ActionReducer,
    combineReducers,
    Action,
    ActionReducerFactory,
    MemoizedSelector,
} from '@ngrx/store';


import { weatherData } from './maps.reducer';

export const reducers = {
    weatherData:weatherData
 };

 export const getweatherData = createFeatureSelector<{}>('weatherData');

 