import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CurrencyService {
  constructor(private http: HttpClient) {}

  public getCurrencyData() {
    return this.http.get(API_URL_ENDPOINT + `${API_KEY}`);
  }
}

const API_KEY = "hvqc2tfPFDsG8RdWSnolqDI2GYAmhk0V";
const API_URL_ENDPOINT = `https://forex.1forge.com/1.0.2/quotes?pairs=EURUSD,GBPJPY,AUDUSD&api_key=`;
const headers = new Headers({
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
});
