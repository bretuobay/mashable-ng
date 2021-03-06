import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/catch";
import "rxjs/add/operator/toArray";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import * as appActions from "../actions/";
import { GET_NEWS_DATA, GET_NEWS_DATA_FAILURE} from "../../constants"
import { NewsService } from "../services/news-api.service";
import { News } from "../../models";

@Injectable()
export class CurrentNewsEffects {
  @Effect()
  getNewsData$: Observable<Action> = this.actions$
    .ofType(GET_NEWS_DATA)
    .map((action: appActions.GetNewsAction) => action.payload)
    .mergeMap(payload =>
      this.newsService
        .getNewsArticlesData(payload)
        .map((res: News) => {
          return new appActions.GetNewsSuccessAction(res);
        })
        .catch(() => of({ type: GET_NEWS_DATA_FAILURE }))
    );

  constructor(private newsService: NewsService, private actions$: Actions) {}
}
