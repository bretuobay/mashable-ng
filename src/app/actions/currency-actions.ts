
import { Action } from '@ngrx/store';
import {AppState, CurrencyObject} from '../models';

export const GET_CURRENCY_DATA = '[Currency] Get Currency';
export const GET_CURRENCY_DATA_SUCCESS = '[Currency] Get Currency Success';
export const GET_CURRENCY_DATA_FAILURE = '[Currency] Get Currency Failure';

export class GetCurrencyAction implements Action {
    readonly type = GET_CURRENCY_DATA;

    constructor(public payload:any) {}
}


export class GetCurrencySuccessAction implements Action {
    readonly type = GET_CURRENCY_DATA_SUCCESS;

    constructor(public payload: CurrencyObject[]) {}
}


export class GetCurrencyFailureAction implements Action {
    readonly type = GET_CURRENCY_DATA_FAILURE;

    constructor(public payload: any) {}
}

export type CurrencyActions =
| GetCurrencyAction
| GetCurrencySuccessAction
| GetCurrencyFailureAction