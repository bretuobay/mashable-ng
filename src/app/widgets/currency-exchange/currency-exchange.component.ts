import { Component, OnInit, Input } from "@angular/core";
import { Store } from "@ngrx/store";
import * as appActions from "../../store/actions/";
import * as R from "../../store/reducers";
import { AppState, Currency } from "../../models";

@Component({
  selector: "app-currency-exchange",
  templateUrl: "./currency-exchange.component.html",
  styleUrls: ["./currency-exchange.component.css"]
})
export class CurrencyExchangeComponent implements OnInit {
  
  @Input() currencyRatesList?: string = "EURUSD,GBPJPY,AUDUSD";

  public currencyList: Currency[];

  constructor(private store: Store<AppState>) {}

  ngOnInit() {
    this.store.dispatch(new appActions.GetCurrencyAction(this.currencyRatesList));

    this.store.select(R.getcurrencyData).subscribe((data: Currency[]) => {
      this.currencyList = data;
    });
  }
}
