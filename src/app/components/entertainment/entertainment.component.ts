import { Component, OnInit } from "@angular/core";
import { SourcesConfig } from "../../models";
import { EntertainmentSources } from "../../app.sources";

@Component({
  selector: "app-entertainment",
  templateUrl: "./entertainment.component.html",
  styleUrls: ["./entertainment.component.css"]
})
export class EntertainmentComponent implements OnInit {
  public mashableList: SourcesConfig[] = EntertainmentSources;
  public sideMashList: SourcesConfig[] = [];
  constructor() {
    this.sideMashList = this.mashableList.filter(s => s.id != "mashable");
  }
  
  ngOnInit() {}
}
