import { Component, OnInit, Input } from "@angular/core";
import * as moment from 'moment';
import { Store } from "@ngrx/store";
import * as appActions from "../../store/actions/";
import * as R from "../../store/reducers";
import { AppState, Articles} from "../../models";
import {get, isEmpty} from "lodash";

@Component({
  selector: "app-news-by-source",
  templateUrl: "./news-by-source.component.html",
  styleUrls: ["./news-by-source.component.css"]
})
export class NewsBySourceComponent implements OnInit {
  @Input() newsSource: string = "techcrunch";
  @Input() isSideBarList: boolean = false;
  public articlesList: Articles;
  constructor(private store: Store<AppState>) { }

  ngOnInit() {
    this.store.select(R.getnewsData).subscribe((data: any) => {
      const newsData = get(data, `${this.newsSource}.news`, []);
      const timeStamp = get(data, `${this.newsSource}.timeStamp`, []);
      const { noData, staleData } = this.cacheChecker(newsData, timeStamp);

      if (noData || staleData) {
        this.store.dispatch(new appActions.GetNewsAction(this.newsSource));
      }
      this.articlesList = data ? newsData : [];
    });
  }

  cacheChecker(data, timeStamp) {
    return ({
      noData: isEmpty(timeStamp) || data && data.length === 0,
      staleData: moment(moment()).diff(timeStamp, 'minutes') > 59
    });
  }

}
