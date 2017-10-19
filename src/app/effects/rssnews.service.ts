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


const API_KEY = '4bd5efbd55fc482e864e824b305950af';
const API_URL_ENDPOINT = `https://newsapi.org/v1/articles`;
const headers = new Headers({
  'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
  'Access-Control-Allow-Origin': '*',
   'Access-Control-Allow-Credentials': 'true'
   
});

 

@Injectable()
export class CurrentRssNewsEffects {

  @Effect() getRssNewsData$ : Observable<Action> = this.actions$
  .ofType(appActions.GET_RSSNEWS_DATA)
  .map((action : appActions.GetRssNewsAction) => action.payload)
  .mergeMap(payload => this.http.get(`https://cdn.ghanaweb.com/feed/newsfeed.xml`,{headers}) 
  .map( (res: Response) => {
      //  console.log(res.json())
      return new appActions.GetRssNewsSuccessAction(res.json())
    }
    )
    .catch(() => of({ type: appActions.GET_RSSNEWS_DATA_FAILURE }))
  );
  



  constructor(
    private http: Http,
    private actions$: Actions
  ) { 
    console.log('we hit the news effects module')
  }

}
