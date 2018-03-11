import { Action } from "@ngrx/store";
import { AppState, NewsObject } from "../../models";

import {
  GET_NEWS_DATA,
  GET_NEWS_DATA_FAILURE,
  GET_NEWS_DATA_SUCCESS
} from "../../constants";
export class GetNewsAction implements Action {
  readonly type = GET_NEWS_DATA;

  constructor(public payload: any) {}
}

export class GetNewsSuccessAction implements Action {
  readonly type = GET_NEWS_DATA_SUCCESS;

  constructor(public payload: NewsObject) {}
}

export class GetNewsFailureAction implements Action {
  readonly type = GET_NEWS_DATA_FAILURE;

  constructor(public payload: any) {}
}

export type NewsActions =
  | GetNewsAction
  | GetNewsSuccessAction
  | GetNewsFailureAction;
