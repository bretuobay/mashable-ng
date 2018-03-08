import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toArray";
import { Injectable } from "@angular/core";
import { Http, Response, Headers } from "@angular/http";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import "rxjs/add/operator/switchMap";
import * as appActions from "../actions/";
import { NewsService } from "../services/news-api.service";
import { NewsObject } from "../../models";

@Injectable()
export class CurrentNewsEffects {
  @Effect()
  getNewsData$: Observable<Action> = this.actions$
    .ofType(appActions.GET_NEWS_DATA)
    .map((action: appActions.GetNewsAction) => action.payload)
    .mergeMap(payload =>
      this.newsService
        .getNewsArticlesData(payload)
        .map((res: NewsObject) => {
          return new appActions.GetNewsSuccessAction(res);
        })
        .catch(() => of({ type: appActions.GET_NEWS_DATA_FAILURE }))
    );

  constructor(private newsService: NewsService, private actions$: Actions) {
    console.log("we hit the news effects module");
  }
}
