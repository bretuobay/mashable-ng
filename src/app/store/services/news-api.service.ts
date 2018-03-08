import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  public getNewsArticlesData(payload) {
    return this.http.get(
      API_URL_ENDPOINT + `?source=${payload}&sortBy=latest&apiKey=${API_KEY}`
    );
  }
}

const API_KEY = "4bd5efbd55fc482e864e824b305950af";
const API_URL_ENDPOINT = `https://newsapi.org/v1/articles`;
const headers = new Headers({
  "Content-Type": "application/x-www-form-urlencoded; charset=UTF-8"
});
