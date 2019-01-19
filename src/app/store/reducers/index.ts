
import { createFeatureSelector } from '@ngrx/store';

import * as M from '../../models';

import { weatherData } from './maps.reducer';
import { newsData } from './news.reducer';
import { currencyData } from './currency.reducer';

export const reducers = {
    weatherData:weatherData,
    newsData : newsData,
    currencyData : currencyData
 };

 export const getweatherData = createFeatureSelector<M.Weather>('weatherData');
 export const getnewsData = createFeatureSelector<M.NewsBySource[]>('newsData');
 export const getcurrencyData = createFeatureSelector<M.Currency[]>('currencyData');

 