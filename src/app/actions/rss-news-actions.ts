
import { Action } from '@ngrx/store';
import {AppState, NewsObject} from '../models';

export const GET_RSSNEWS_DATA = '[RssNews] Get RssNews';
export const GET_RSSNEWS_DATA_SUCCESS = '[RssNews] Get RssNews Success';
export const GET_RSSNEWS_DATA_FAILURE = '[RssNews] Get RssNews Failure';

export class GetRssNewsAction implements Action {
    readonly type = GET_RSSNEWS_DATA;

    constructor(public payload:any) {}
}


export class GetRssNewsSuccessAction implements Action {
    readonly type = GET_RSSNEWS_DATA_SUCCESS;

    constructor(public payload: NewsObject) {}
}


export class GetRssNewsFailureAction implements Action {
    readonly type = GET_RSSNEWS_DATA_FAILURE;

    constructor(public payload: any) {}
}

export type RssNewsActions =
| GetRssNewsAction
| GetRssNewsSuccessAction
| GetRssNewsFailureAction