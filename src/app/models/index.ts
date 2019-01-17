export class Weather {
  public coord;
  public weather;
  public base;
  public main;
  public wind;
  public clouds;
  public dt;
  public sys;
  public id;
  public name;
  public cod;
}

export class SourcesConfiguration {
  id: string;
  label: string;
  category?: string;
}

export class Articles {
  public author: string;
  public title: string;
  public description: string;
  public url: string;
  public urlToImage: string;
  public publishedAt: Date;
}

export class News {
  articles: Articles;
  status: string;
  source: string;
  sortedBy: string;
}

export class NewsBySource {
  [source: string]: News;
}

export class Currency {
  symbol: string;
  price: number;
  bid: number;
  ask: number;
  timestamp: number;
}

export class AppState {
  weatherData: Weather;
  newsData: News;
  currencyData: Currency;
}
