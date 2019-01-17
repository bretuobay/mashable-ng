import { Action } from "@ngrx/store";
import { Currency } from "../../models";
import {GET_CURRENCY_DATA, GET_CURRENCY_DATA_FAILURE, GET_CURRENCY_DATA_SUCCESS} from "../../constants";

export class GetCurrencyAction implements Action {
  readonly type = GET_CURRENCY_DATA;
  constructor(public payload: string) {}
}

export class GetCurrencySuccessAction implements Action {
  readonly type = GET_CURRENCY_DATA_SUCCESS;
  constructor(public payload: Currency[]) {}
}

export class GetCurrencyFailureAction implements Action {
  readonly type = GET_CURRENCY_DATA_FAILURE;
  constructor(public payload: any) {}
}

export type CurrencyActions =
  | GetCurrencyAction
  | GetCurrencySuccessAction
  | GetCurrencyFailureAction;