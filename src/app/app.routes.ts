import { RouterModule, Routes } from "@angular/router";
import { CultureComponent } from "./screens/culture/culture.component";
import { EntertainmentComponent } from "./screens/entertainment/entertainment.component";
import { TechComponent } from "./screens/tech/tech.component";
import { ScienceComponent } from "./screens/science/science.component";
import { BusinessComponent } from "./screens/business/business.component";
import { VideosComponent } from "./screens/videos/videos.component";
import { MainComponent } from "./widgets/main/main.component";

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
    path: "",
    redirectTo: "/home",
    pathMatch: "full"
  },
  { path: "**", component: MainComponent }
];
