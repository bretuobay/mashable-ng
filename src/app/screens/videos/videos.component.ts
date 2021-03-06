import { Component, OnInit } from "@angular/core";
import { SourcesConfiguration } from "../../models";
import { VideoSources } from "../../app.sources";

@Component({
  selector: "app-videos",
  templateUrl: "./videos.component.html",
  styleUrls: ["./videos.component.css"]
})
export class VideosComponent implements OnInit {
  public mashableList: SourcesConfiguration[] = VideoSources;
  public sideMashList: SourcesConfiguration[] = [];
  constructor() {
    this.sideMashList = this.mashableList.filter(s => s.id != "mashable");
  }

  ngOnInit() {}
}
