import { RouterModule, Routes } from "@angular/router";
import { CultureComponent } from "./components/culture/culture.component";
import { EntertainmentComponent } from "./components/entertainment/entertainment.component";
import { TechComponent } from "./components/tech/tech.component";
import { ScienceComponent } from "./components/science/science.component";
import { BusinessComponent } from "./components/business/business.component";
import { VideosComponent } from "./components/videos/videos.component";
import { MainComponent } from "./containers/main/main.component";

export const appRoutes: Routes = [
  { path: "home", component: MainComponent },
  { path: "test", component: MainComponent },
  { path: "culture", component: CultureComponent },
  { path: "entertainment", component: EntertainmentComponent },
  { path: "technology", component: TechComponent },
  { path: "science", component: ScienceComponent },
  { path: "business", component: BusinessComponent },
  { path: "videos", component: VideosComponent },
  {
    path: "login",
    loadChildren: "./modules/login/login.module#LoginModule"
  },
  {
    path: "register",
    loadChildren: "./modules/register/register.module#RegisterModule",
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  },
  { path: "**", component: MainComponent }
];
