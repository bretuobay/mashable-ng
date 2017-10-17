import { Component, OnInit } from '@angular/core';
import { Store } from "@ngrx/store";
import * as appActions from "../actions/";
import * as R from "../reducers";

import { AppState, NewsObject, Articles , NewsBySource} from "../models";

import * as _ from 'lodash';

@Component({
  selector: 'app-rss-news',
  templateUrl: './rss-news.component.html',
  styleUrls: ['./rss-news.component.css']
})
export class RssNewsComponent implements OnInit {

  constructor(private store: Store<AppState> ) { }

  ngOnInit() {
  }

  onClickGetLocalNews(event: MouseEvent){

    this.store.dispatch(new appActions.GetRssNewsAction(''));

  }

}
