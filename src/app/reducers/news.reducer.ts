import { ActionReducer, Action } from '@ngrx/store';

import * as news from '../actions/news-actions';

import { NewsObject, NewsBySource } from '../models';

import * as _ from 'lodash';

export function  newsData (state: NewsBySource[] , action: news.NewsActions) : NewsBySource | any{
	switch (action.type) {

		case news.GET_NEWS_DATA:
				 return null;
				 
		case news.GET_NEWS_DATA_SUCCESS:
				let newNewsMap =  mapToNewsItemToSource(action.payload);
			
				return  [state, ...newNewsMap];

	  case news.GET_NEWS_DATA_FAILURE:
			return state;

		default:
			return state;
	}
}

function mapToNewsItemToSource(payloaddata){

	let newSourceArticles = _.keyBy([payloaddata], 'source');

	return newSourceArticles;
		
}