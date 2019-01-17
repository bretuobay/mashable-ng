import { Component, OnInit } from "@angular/core";
import { SourcesConfig } from "../../models";
import { BusinessSources } from "../../app.sources";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

public mashableList: SourcesConfig[] = BusinessSources;
public sideMashList: SourcesConfig[] = [];
constructor() {
 this.sideMashList = this.mashableList.filter( s => s.id!='mashable');
}

ngOnInit() {}

}
