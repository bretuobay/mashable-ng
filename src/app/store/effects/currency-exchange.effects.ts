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
import { GET_CURRENCY_DATA, GET_CURRENCY_DATA_FAILURE, GET_CURRENCY_DATA_SUCCESS} from "../../constants"
import { CurrencyService } from "../services/currency-api.service";
import { CurrencyObject } from "../../models";

@Injectable()
export class CurrencyEffects {
  @Effect()
  getNewsData$: Observable<Action> = this.actions$
    .ofType(GET_CURRENCY_DATA)
    .map((action: appActions.GetCurrencyAction) => action.payload)
    .mergeMap(payload =>
      this.currService
        .getCurrencyData()
        .map((res: CurrencyObject[]) => {
          return new appActions.GetCurrencySuccessAction(res);
        })
        .catch(() => of({ type: GET_CURRENCY_DATA_FAILURE }))
    );

  constructor(private currService: CurrencyService, private actions$: Actions) {
    console.log("we hit the news effects module");
  }
}
