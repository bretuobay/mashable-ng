import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { reducers } from './reducers';
import {WeatherMapEffects , CurrentNewsEffects , CurrencyEffects, CurrentRssNewsEffects} from './effects';

import { ReactiveFormsModule } from '@angular/forms';

import {NglModule} from 'ng-lightning/ng-lightning';

import { MarkdownModule } from 'angular2-markdown';

import { AppService } from './app.service';

import { YagaModule } from '@yaga/leaflet-ng2';

import { AgmCoreModule } from '@agm/core';

import {SelectModule} from 'ng-select';

import { AgmSnazzyInfoWindowModule } from '@agm/snazzy-info-window';

import { AppComponent } from './app.component';

import { appRoutes } from './app.routes';

import { MashableCloneComponent } from "./mashable-clone/mashable-clone.component";
import { NewsBySourceComponent } from './news-by-source/news-by-source.component';
import { CurrencyExchangeComponent } from './currency-exchange/currency-exchange.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { MainComponent } from './main/main.component';
import { CultureComponent } from './culture/culture.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TechComponent } from './tech/tech.component';
import { ScienceComponent } from './science/science.component';
import { BusinessComponent } from './business/business.component';
import { VideosComponent } from './videos/videos.component';
import { SideBarPostsComponent } from './side-bar-posts/side-bar-posts.component';

@NgModule({
  declarations: [
    AppComponent,
    MashableCloneComponent,
    NewsBySourceComponent,
    CurrencyExchangeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
    CultureComponent,
    EntertainmentComponent,
    TechComponent,
    ScienceComponent,
    BusinessComponent,
    VideosComponent,
    SideBarPostsComponent,
  ],
  imports: [
    BrowserModule,
    YagaModule,
    HttpModule,
    ReactiveFormsModule,
    AgmSnazzyInfoWindowModule,
    SelectModule,
    MarkdownModule.forRoot(),
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
    EffectsModule.forRoot([WeatherMapEffects,
       CurrentNewsEffects,
        CurrencyEffects,CurrentRssNewsEffects])
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
