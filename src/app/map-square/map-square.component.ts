import { Component, OnInit } from '@angular/core';
import { OSM_TILE_LAYER_URL }   from '@yaga/leaflet-ng2';
import { Store } from '@ngrx/store';
import * as  weather  from '../actions/actions';
import * as R  from '../reducers';
interface AppState {
  weatherData: any;
}

@Component({
  selector: 'app-map-square',
  templateUrl: './map-square.component.html',
  styleUrls: ['./map-square.component.css']
})
export class MapSquareComponent implements OnInit {
  public editable: boolean = true;
  public name: string = 'Passau';
  public lat: number = 48.5768558;
  public lng: number = 13.268283;
  public currentWeather : Object;
  constructor(private store: Store<AppState>) {
    

      // this.onClickGetWeather();

      // this.store.select(R.getweatherData).subscribe( data =>{
      //   let weatherData = this.destructDataByCity(data)
       
      //   if(weatherData){
      //       this.name = weatherData.name;
      //       this.lat = weatherData.coord.lat;
      //       this.lng = weatherData.coord.lon;
      //   }
          
      // });

  
   }


   destructDataByCity(weatherProps) {
    let coord,
      weather,
      base,
      main,
      wind,
      clouds,
      dt,
      sys,
      id,
      name,
      cod;
    return { coord, weather, base, main, wind, clouds, dt, sys, id, name, cod } = weatherProps;
  }


   onClickGetWeather(){
     setInterval( ()=>{
          this.store.dispatch(new weather.GetWeatherAction([]));
     }, 1000000)
    }

  ngOnInit() {



    let data = {"coord":{"lon":-1.62,"lat":6.69},"weather":[{"id":501,"main":"Rain","description":"moderate rain","icon":"10d"}],"base":"stations","main":{"temp":295.899,"pressure":999.66,"humidity":100,"temp_min":295.899,"temp_max":295.899,"sea_level":1026.88,"grnd_level":999.66},"wind":{"speed":1.87,"deg":103.501},"rain":{"3h":4.4325},"clouds":{"all":76},"dt":1506677569,"sys":{"message":0.0036,"country":"GH","sunrise":1506664475,"sunset":1506707913},"id":2298890,"name":"Kumasi","cod":200}
    
    let weatherData = this.destructDataByCity(data)
     console.log(weatherData)
     if(weatherData){
         this.name = weatherData.name;
         this.lat = weatherData.coord.lat;
         this.lng = weatherData.coord.lon;
     }
    
  }

}
