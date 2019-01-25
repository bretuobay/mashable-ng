
import { createFeatureSelector } from '@ngrx/store';
import { weatherData } from './weather.reducer';
import { newsData } from './news.reducer';
import { currencyData } from './currency.reducer';
import * as M from '../../models';

export const reducers = {
    weatherData:weatherData,
    newsData : newsData,
    currencyData : currencyData
 };

 export const getweatherData = createFeatureSelector<M.Weather>('weatherData');
 export const getnewsData = createFeatureSelector<M.NewsBySource[]>('newsData');
 export const getcurrencyData = createFeatureSelector<M.Currency[]>('currencyData');

 