import { Component, OnInit } from "@angular/core";
import { SourcesConfiguration } from "../../models";
import { EntertainmentSources } from "../../app.sources";

@Component({
  selector: "app-entertainment",
  templateUrl: "./entertainment.component.html",
  styleUrls: ["./entertainment.component.css"]
})
export class EntertainmentComponent implements OnInit {
  public mashableList: SourcesConfiguration[] = EntertainmentSources;
  public sideMashList: SourcesConfiguration[] = [];
  constructor() {
    this.sideMashList = this.mashableList.filter(s => s.id != "mashable");
  }
  
  ngOnInit() {}
}
