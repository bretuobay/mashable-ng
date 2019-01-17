import "rxjs/add/operator/map";
import "rxjs/add/operator/mergeMap";
import "rxjs/add/operator/catch";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Action } from "@ngrx/store";
import { Actions, Effect } from "@ngrx/effects";
import { of } from "rxjs/observable/of";
import * as appActions from "../actions/";
import { GET_CURRENCY_DATA, GET_CURRENCY_DATA_FAILURE } from "../../constants"
import { CurrencyService } from "../services/currency-api.service";
import { Currency } from "../../models";

@Injectable()
export class CurrencyEffects {
  @Effect()
  getNewsData$: Observable<Action> = this.actions$
    .ofType(GET_CURRENCY_DATA)
    .map((action: appActions.GetCurrencyAction) => action.payload)
    .mergeMap(payload =>
      this.currService.getCurrencyData(payload)
        .map((res: Currency[]) => {
          return new appActions.GetCurrencySuccessAction(res);
        })
        .catch(() => of({ type: GET_CURRENCY_DATA_FAILURE }))
    );

  constructor(private currService: CurrencyService, private actions$: Actions) {}
}
