import { Action } from "@ngrx/store";
import { AppState, NewsObject } from "../../models";

export const GET_NEWS_DATA = "[News] Get News";
export const GET_NEWS_DATA_SUCCESS = "[News] Get News Success";
export const GET_NEWS_DATA_FAILURE = "[News] Get News Failure";

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
