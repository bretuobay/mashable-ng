import { RouterModule, Routes } from "@angular/router";
import { GoogleMapsComponent } from "./google-maps/google-maps.component";
import { MapSquareComponent } from "./map-square/map-square.component";
import { LightDashboardComponent } from "./light-dashboard/light-dashboard.component";
import { MapBoxComponent } from "./map-box/map-box.component";

export const appRoutes: Routes = [
  { path: "google-maps", component: GoogleMapsComponent },
  { path: "yaga-maps", component: MapSquareComponent },
  { path: "map-box", component: MapBoxComponent },
  { path: "dashboard", component: LightDashboardComponent },
  {
    path: "",
    redirectTo: "/yaga-maps",
    pathMatch: "full"
  },
  { path: "**", component: MapSquareComponent }
];
