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
  private isAuthState: BehaviorSubject<boolean> = new BehaviorSubject(null);
  constructor(private router: Router) {
    this.router.events.forEach((event: NavigationEvent) => {
      if (event instanceof NavigationStart) {
        this.setAuthState(event);
        console.log(event.url,'on the route')
        console.log(this.isAuthState.value)
      }
    });
    
  }

  ngOnInit(){

   
  }

  private setAuthState(event: NavigationStart) {
    switch (event.url) {
      case "/login":
      case "/register": {
        console.log('we in control')
         this.isAuthState.next(true);
      }
      default: {
         this.isAuthState.next(false);
      }
    }
  }
}
