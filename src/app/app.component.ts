import { Component , OnInit} from "@angular/core";
import {
  Router,
  NavigationStart,
  NavigationEnd,
  Event as NavigationEvent
} from "@angular/router";

import { BehaviorSubject } from "rxjs/BehaviorSubject";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent implements OnInit{
  private isAuthState: BehaviorSubject<boolean> = new BehaviorSubject(false);
  constructor(private router: Router) {

    this.router.events.forEach((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.setAuthState(event);
      }
    });
    
  }

  ngOnInit(){

   
  }

  private setAuthState(event: NavigationStart) {
    switch (event.url) {
      case "/login":
      case "/register": {
         this.isAuthState.next(false);
         break;
      }
      default: {
         this.isAuthState.next(true);
         break;
      }
    }
  }
}
