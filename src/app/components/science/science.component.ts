import { Component, OnInit } from "@angular/core";
import { SourcesConfig } from "../../models";
import { ScienceSources } from "../../app.sources";

@Component({
  selector: "app-science",
  templateUrl: "./science.component.html",
  styleUrls: ["./science.component.css"]
})
export class ScienceComponent implements OnInit {
  public mashableList: SourcesConfig[] = ScienceSources;
  public sideMashList: SourcesConfig[] = [];
  
  constructor() {
    this.sideMashList = this.mashableList.filter(s => s.id != "mashable");
  }

  ngOnInit() {}
}
