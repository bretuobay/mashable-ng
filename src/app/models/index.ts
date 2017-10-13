
 export class WeatherObject {
    public coord;
    public weather;
    public base;
    public  main;
    public wind;
    public clouds;
    public dt;
    public sys;
    public id;
    public name;
    public cod;
  }

  export class SourcesConfig{
    id : string;
    label : string;
    category? : string;
  }

  export class Articles{

    public author:string;
    public title:string;
    public description:string;
    public url:string;
    public urlToImage:string;
    public publishedAt: Date
  }

  export class NewsObject{

    articles : Articles;
    status : string;
    source : string;
    sortedBy : string;

  }

  export class NewsBySource{
   
    [source : string] : NewsObject

  }

  export class CurrencyObject{

    symbol: string;
    price: number;
    bid: number;
    ask: number;
    timestamp: number;
  }


  export class AppState {
    weatherData: WeatherObject;
    newsData : NewsObject;
    currencyData : CurrencyObject;
  }
  