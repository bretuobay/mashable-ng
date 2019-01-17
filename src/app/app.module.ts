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
import { WeatherMapEffects, CurrentNewsEffects, CurrencyEffects } from "./store/effects";
import { WeatherService, NewsService, CurrencyService } from "./store/services";
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { appRoutes } from "./app.routes";
import { NewsBySourceComponent } from "./widgets/news-by-source/news-by-source.component";
import { CurrencyExchangeComponent } from "./widgets/currency-exchange/currency-exchange.component";
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { MainComponent } from "./widgets/main/main.component";
import { CultureComponent } from "./screens/culture/culture.component";
import { EntertainmentComponent } from "./screens/entertainment/entertainment.component";
import { TechComponent } from "./screens/tech/tech.component";
import { ScienceComponent } from "./screens/science/science.component";
import { BusinessComponent } from "./screens/business/business.component";
import { VideosComponent } from "./screens/videos/videos.component";

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
    RouterModule.forRoot(appRoutes),
    FormsModule,
    HttpClientModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([
      WeatherMapEffects,
      CurrentNewsEffects,
      CurrencyEffects
    ])
  ],
  providers: [WeatherService, NewsService, CurrencyService],
  bootstrap: [AppComponent]
})
export class AppModule {}
