import { CurrencyActions } from "../actions/currency-actions";
import { GET_CURRENCY_DATA_FAILURE, GET_CURRENCY_DATA_SUCCESS, GET_CURRENCY_DATA } from "../../constants";
import { Currency } from "../../models";

export function currencyData(state: Currency[] = [], action: CurrencyActions) {
  switch (action.type) {
    case GET_CURRENCY_DATA:
      return state;
    case GET_CURRENCY_DATA_SUCCESS:
      return [...action.payload];
    case GET_CURRENCY_DATA_FAILURE:
      return state;
    default:
      return state;
  }
}
