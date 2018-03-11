import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import {NEWS_API_KEY, NEWS_API_URL_ENDPOINT } from "../../constants"
@Injectable()
export class NewsService {
  constructor(private http: HttpClient) {}

  public getNewsArticlesData(payload) {
    return this.http.get(
      NEWS_API_URL_ENDPOINT + `?source=${payload}&sortBy=latest&apiKey=${NEWS_API_KEY}`
    );
  }
}

