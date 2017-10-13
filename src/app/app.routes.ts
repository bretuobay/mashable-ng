import { RouterModule, Routes } from "@angular/router";

import { MashableCloneComponent } from "./mashable-clone/mashable-clone.component";
import { CultureComponent } from './culture/culture.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { TechComponent } from './tech/tech.component';
import { ScienceComponent } from './science/science.component';
import { BusinessComponent } from './business/business.component';
import { VideosComponent } from './videos/videos.component';
import { MainComponent } from './main/main.component';


export const appRoutes: Routes = [
  { path: "home", component: MainComponent },
  { path: "test", component: MashableCloneComponent },
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
  { path: "**", component: MashableCloneComponent }
];
