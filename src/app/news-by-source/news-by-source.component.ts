import { Component, OnInit , Input, Output } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import * as appActions from "../actions/";
import * as R from "../reducers";

import { AppState, NewsObject, Articles , NewsBySource} from "../models";

import * as _ from 'lodash';


@Component({
  selector: 'app-news-by-source',
  templateUrl: './news-by-source.component.html',
  styleUrls: ['./news-by-source.component.css']
})
export class NewsBySourceComponent implements OnInit {

   @Input() NewsSource : string = 'techcrunch';
   public articlesList :  Articles;

  constructor(private store: Store<AppState> ) {

    

   }

  ngOnInit() {

   this.store.dispatch(new appActions.GetNewsAction(this.NewsSource));

   this.store.select(R.getnewsData).subscribe((data: NewsBySource[]) => {
    
        if(data){
          data.filter(stateData=>{
                return stateData!==undefined;
             }).map( (data : NewsBySource) =>{
                
            let keyval =   _.findKey(data, ['source', this.NewsSource]);
             if(keyval){
               this.articlesList = data[keyval].articles;
             }
            });
          }    
        
  });


}

}
