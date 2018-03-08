


import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) { }

  public getWeatherData(payload){
      return this.http.get(API_URL_ENDPOINT + `/weather?q=${payload}&appid=${API_KEY}`);
  }
}

const API_KEY = "db9457193cdbb7db418c6749874fb68b";
const API_URL_ENDPOINT = `http://api.openweathermap.org/data/2.5`;


