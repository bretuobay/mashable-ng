import { Component, OnInit, Input, Output } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { Store } from "@ngrx/store";
import * as appActions from "../store/actions/";
import * as R from "../store/reducers";

import { AppState, CurrencyObject } from "../models";

@Component({
  selector: "app-currency-exchange",
  templateUrl: "./currency-exchange.component.html",
  styleUrls: ["./currency-exchange.component.css"]
})
export class CurrencyExchangeComponent implements OnInit {
  @Input() CurrencyRatesList?: string = "EURUSD,GBPJPY,AUDUSD";
  public currencyList: CurrencyObject[];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(
      new appActions.GetCurrencyAction(this.CurrencyRatesList)
    );

    this.store.select(R.getcurrencyData).subscribe((data: CurrencyObject[]) => {
      this.currencyList = data;
    });
  }
}
