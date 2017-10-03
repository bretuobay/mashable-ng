import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import {WeatherMapEffects } from './effects';

import {NglModule} from 'ng-lightning/ng-lightning';

import { AppService } from './app.service';

import { YagaModule } from '@yaga/leaflet-ng2';

import { AgmCoreModule } from '@agm/core';

import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { AppComponent } from './app.component';

import { appRoutes } from './app.routes';

import { MapSquareComponent } from './map-square/map-square.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { LightDashboardComponent } from './light-dashboard/light-dashboard.component';
import { MapPopComponent } from './map-pop/map-pop.component';
import { MapBoxComponent } from './map-box/map-box.component';

@NgModule({
  declarations: [
    AppComponent,
    MapSquareComponent,
    GoogleMapsComponent,
    LightDashboardComponent,
    MapPopComponent,
    MapBoxComponent
  ],
  imports: [
    BrowserModule,
    YagaModule,
    HttpModule,
    AgmSnazzyInfoWindowModule,
    NglModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBiq5XcFuuwbNet77mWhiM7oU7KK-yDU0Q'
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([WeatherMapEffects])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
