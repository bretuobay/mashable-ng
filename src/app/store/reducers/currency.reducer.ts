import { ActionReducer, Action } from "@ngrx/store";

import * as currency from "../actions/currency-actions";
import * as actionTypes from "../../constants";

import { Currency } from "../../models";

export function currencyData(
  state: Currency[] = [],
  action: currency.CurrencyActions
) {
  switch (action.type) {
    case actionTypes.GET_CURRENCY_DATA:
      return state;

    case actionTypes.GET_CURRENCY_DATA_SUCCESS:
      return Object.assign([...state], action.payload);

    case actionTypes.GET_CURRENCY_DATA_FAILURE:
      return state;

    default:
      return state;
  }
}
