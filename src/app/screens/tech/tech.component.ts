import { Component, OnInit } from "@angular/core";
import { SourcesConfiguration } from "../../models";
import { TechnologySources } from "../../app.sources";

@Component({
  selector: "app-tech",
  templateUrl: "./tech.component.html",
  styleUrls: ["./tech.component.css"]
})
export class TechComponent implements OnInit {
  public mashableList: SourcesConfiguration[] = TechnologySources;
  public sideMashList: SourcesConfiguration[] = [];

  public currentWeather: Object;

  constructor() {
    this.sideMashList = this.mashableList.filter(s => s.id != "mashable");
  }

  ngOnInit() {}
}
