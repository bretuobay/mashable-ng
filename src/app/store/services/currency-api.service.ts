import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {CURRENCY_API_KEY, CURRENCY_API_URL_ENDPOINT } from "../../constants"
@Injectable()
export class CurrencyService {
  constructor(private http: HttpClient) {}

  public getCurrencyData() {
    return this.http.get(CURRENCY_API_URL_ENDPOINT + `${CURRENCY_API_KEY}`);
  }
}

