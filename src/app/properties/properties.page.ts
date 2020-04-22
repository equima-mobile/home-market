import { Component, OnInit } from '@angular/core';
import { PropertiesService } from '../shared/properties.service';

@Component({
  selector: 'app-properties',
  templateUrl: './properties.page.html',
  styleUrls: ['./properties.page.scss'],
})
export class PropertiesPage implements OnInit {
  properties: any[];
  spinner: boolean = false;
  constructor(public propertyService: PropertiesService) { }

  ngOnInit() {
    this.spinner=true;
    this.propertyService.Getproperties().subscribe((data: any[]) => {
      this.properties = data;
      this.spinner=false;
      console.log('properties',this.properties);
      });
  }

}
