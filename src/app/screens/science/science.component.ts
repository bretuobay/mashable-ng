import { Component, OnInit } from "@angular/core";
import { SourcesConfiguration } from "../../models";
import { ScienceSources } from "../../app.sources";

@Component({
  selector: "app-science",
  templateUrl: "./science.component.html",
  styleUrls: ["./science.component.css"]
})
export class ScienceComponent implements OnInit {
  public mashableList: SourcesConfiguration[] = ScienceSources;
  public sideMashList: SourcesConfiguration[] = [];
  
  constructor() {
    this.sideMashList = this.mashableList.filter(s => s.id != "mashable");
  }

  ngOnInit() {}
}
