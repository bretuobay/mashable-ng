import { Component, OnInit } from "@angular/core";
import { SourcesConfiguration } from "../../models";
import { BusinessSources } from "../../app.sources";

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent implements OnInit {

public mashableList: SourcesConfiguration[] = BusinessSources;
public sideMashList: SourcesConfiguration[] = [];
constructor() {
 this.sideMashList = this.mashableList.filter( s => s.id!='mashable');
}

ngOnInit() {}

}
