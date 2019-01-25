import * as moment from 'moment';
import {get} from 'lodash';
import * as news from "../actions/news-actions";
import {GET_NEWS_DATA, GET_NEWS_DATA_SUCCESS, GET_NEWS_DATA_FAILURE} from "../../constants";
import { NewsBySource } from "../../models";

export function newsData(state = {}, action: news.NewsActions): NewsBySource | any {
  const {type, payload} = action;
  const sourceName: string = get(payload, 'source');
  switch (type) {
    case GET_NEWS_DATA:
      return state;
    case GET_NEWS_DATA_SUCCESS:
    return {
      ...state,
      [sourceName]: { news: get(payload, 'articles'), timeStamp: moment()}
    };
    case GET_NEWS_DATA_FAILURE:
      return state;
    default:
      return state;
  }
}

