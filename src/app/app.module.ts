import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { RouterModule } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { EffectsModule } from "@ngrx/effects";
import { AgmCoreModule } from "@agm/core";
import { AgmSnazzyInfoWindowModule } from "@agm/snazzy-info-window";
import { reducers } from "./store/reducers";
import {
  WeatherMapEffects,
  CurrentNewsEffects,
  CurrencyEffects
} from "./store/effects";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { NewsBySourceComponent } from "./news-by-source/news-by-source.component";
import { CurrencyExchangeComponent } from "./currency-exchange/currency-exchange.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { MainComponent } from "./main/main.component";
import { CultureComponent } from "./culture/culture.component";
import { EntertainmentComponent } from "./entertainment/entertainment.component";
import { TechComponent } from "./tech/tech.component";
import { ScienceComponent } from "./science/science.component";
import { BusinessComponent } from "./business/business.component";
import { VideosComponent } from "./videos/videos.component";

@NgModule({
  declarations: [
    AppComponent,
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
    VideosComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    AgmSnazzyInfoWindowModule,
    AgmCoreModule.forRoot({
      apiKey: "AIzaSyBiq5XcFuuwbNet77mWhiM7oU7KK-yDU0Q"
    }),
    RouterModule.forRoot(
      appRoutes
      // { enableTracing: true } // <-- debugging purposes only
    ),
    FormsModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      WeatherMapEffects,
      CurrentNewsEffects,
      CurrencyEffects
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
