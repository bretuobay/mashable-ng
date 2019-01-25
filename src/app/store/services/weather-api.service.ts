import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { WEATHER_API_KEY, WEATHER_API_URL_ENDPOINT } from "../../constants"
@Injectable()
export class WeatherService {
  constructor(private http: HttpClient) { }

  public getWeatherData(payload){
      return this.http.get(WEATHER_API_URL_ENDPOINT + `/weather?q=${payload}&appid=${WEATHER_API_KEY}`);
  }
}

