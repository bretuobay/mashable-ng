import { ActionReducer, Action } from "@ngrx/store";

import * as currency from "../actions/currency-actions";
import * as actionTypes from "../../constants";


import { CurrencyObject } from "../../models";

export function currencyData(
  state: CurrencyObject,
  action: currency.CurrencyActions
) {
  switch (action.type) {
    case actionTypes.GET_CURRENCY_DATA:
      return [action.payload];

    case actionTypes.GET_CURRENCY_DATA_SUCCESS:
      return [...action.payload];

    case actionTypes.GET_CURRENCY_DATA_FAILURE:
      return state;

    default:
      return state;
  }
}
