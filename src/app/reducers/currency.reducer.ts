import { ActionReducer, Action } from "@ngrx/store";

import * as currency from "../actions/currency-actions";

import { CurrencyObject } from "../models";

export function currencyData(
  state: CurrencyObject,
  action: currency.CurrencyActions
) {
  switch (action.type) {
    case currency.GET_CURRENCY_DATA:
      return [action.payload];

    case currency.GET_CURRENCY_DATA_SUCCESS:
      return [...action.payload];

    case currency.GET_CURRENCY_DATA_FAILURE:
      return state;

    default:
      return state;
  }
}
