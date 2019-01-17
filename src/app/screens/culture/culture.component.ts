import { Component, OnInit } from "@angular/core";
import { SourcesConfiguration } from "../../models";
import { CultureSources } from "../../app.sources";

@Component({
  selector: 'app-culture',
  templateUrl: './culture.component.html',
  styleUrls: ['./culture.component.css']
})
export class CultureComponent implements OnInit {

  public mashableList: SourcesConfiguration[] = CultureSources;
  public sideMashList: SourcesConfiguration[] = [];
  constructor() {
    this.sideMashList = this.mashableList.filter(s => s.id != 'mashable');
  }

  ngOnInit() {}
}
