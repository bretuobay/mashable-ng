
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toArray';
import { Injectable } from '@angular/core';
import { Http,Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/switchMap';
import * as appActions from '../actions/';

const API_KEY = 'hvqc2tfPFDsG8RdWSnolqDI2GYAmhk0V';
const API_URL_ENDPOINT = ` https://forex.1forge.com/1.0.2/quotes?pairs=EURUSD,GBPJPY,AUDUSD&api_key=`;
const headers = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
});
   
    

@Injectable()
export class CurrencyEffects {

  @Effect() getNewsData$ : Observable<Action> = this.actions$
  .ofType(appActions.GET_CURRENCY_DATA)
  .map((action : appActions.GetCurrencyAction) => action.payload)
  .mergeMap(payload => this.http.get( API_URL_ENDPOINT+`${API_KEY}`,{headers}) 
  .map( (res: Response) => {
      //  console.log(res.json())
      return new appActions.GetCurrencySuccessAction(res.json())
    }
    )
    .catch(() => of({ type: appActions.GET_CURRENCY_DATA_FAILURE }))
  );


  constructor(
    private http: Http,
    private actions$: Actions
  ) { 
    console.log('we hit the news effects module')
  }

}
