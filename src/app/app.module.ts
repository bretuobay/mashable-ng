import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { rootReducer } from './reducers';
import {WeatherMapEffects } from './effects';
import { YagaModule } from '@yaga/leaflet-ng2';
import { AppComponent } from './app.component';
import { MapSquareComponent } from './map-square/map-square.component';

@NgModule({
  declarations: [
    AppComponent,
    MapSquareComponent
  ],
  imports: [
    BrowserModule,
    YagaModule,
    HttpModule,
    FormsModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([WeatherMapEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
