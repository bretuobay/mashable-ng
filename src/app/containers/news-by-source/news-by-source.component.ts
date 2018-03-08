import {
  Component,
  OnInit,
  Input,
  Output,
  OnChanges,
  SimpleChanges
} from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as appActions from "../../store/actions/";
import * as R from "../../store/reducers";

import { AppState, NewsObject, Articles, NewsBySource } from "../../models";

import * as _ from "lodash";

@Component({
  selector: "app-news-by-source",
  templateUrl: "./news-by-source.component.html",
  styleUrls: ["./news-by-source.component.css"]
})
export class NewsBySourceComponent implements OnInit, OnChanges {
  @Input() NewsSource: string = "techcrunch";
  @Input() isSideBarOpen: boolean = false;
  public articlesList: Articles;
  constructor(private store: Store<AppState>) {}
  ngOnChanges(changes: SimpleChanges) {
    if (changes["NewsSource"]) {
      this.store.dispatch(new appActions.GetNewsAction(this.NewsSource));
    }
  }

  ngOnInit() {
    this.store.select(R.getnewsData).subscribe((data: NewsBySource[]) => {
      if (data) {
        data
          .filter(stateData => {
            return stateData !== undefined;
          })
          .map((data: NewsBySource) => {
            let keyval = _.findKey(data, ["source", this.NewsSource]);
            if (keyval) {
              this.articlesList = data[keyval].articles;
            }
          });
      }
    });
  }
}
