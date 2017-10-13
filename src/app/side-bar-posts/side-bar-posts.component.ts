
import { Component, OnInit , Input, Output, SimpleChanges, OnChanges,  AfterViewInit  } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { Store } from "@ngrx/store";
import * as appActions from "../actions/";
import * as R from "../reducers";
import { AppState, NewsObject, Articles, NewsBySource } from "../models";
import * as _ from 'lodash';

@Component({
  selector: 'app-side-bar-posts',
  templateUrl: './side-bar-posts.component.html',
  styleUrls: ['./side-bar-posts.component.css']
})
export class SideBarPostsComponent implements OnInit , OnChanges,  AfterViewInit {


   @Input() NewsSource : string = 'techcrunch';
   public articlesList :  Articles;

  constructor(private store: Store<AppState> ) {

  
   

   }

   ngAfterViewInit() {
    // ...

    this.store.dispatch(new appActions.GetNewsAction(this.NewsSource));
    
  
      this.store.select(R.getnewsData).subscribe((data : NewsBySource[]) => {
        
            if(data){
              data.filter(stateData=>{
                return stateData!==undefined;
                 }).map( (data : NewsBySource) =>{
                    
                let keyval =   _.findKey(data, ['source', this.NewsSource]);
                 if(keyval){
                   this.articlesList = data[keyval].articles;
                 }
                   
                 })
              }    
      });
  }

  ngOnInit() {
     
   
}

ngOnChanges(changes: SimpleChanges) {
  
  if(changes['NewsSource']){
    //this.store.dispatch(new appActions.GetNewsAction(this.NewsSource));
  }
}

}

