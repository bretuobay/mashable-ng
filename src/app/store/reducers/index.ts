
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

import * as M from '../../models';

import { weatherData } from './maps.reducer';
import { newsData } from './news.reducer';
import { currencyData } from './currency.reducer';

export const reducers = {
    weatherData:weatherData,
    newsData : newsData,
    currencyData : currencyData
 };

 export const getweatherData = createFeatureSelector<M.WeatherObject>('weatherData');
 export const getnewsData = createFeatureSelector<M.NewsBySource[]>('newsData');
 export const getcurrencyData = createFeatureSelector<M.CurrencyObject[]>('currencyData');

 