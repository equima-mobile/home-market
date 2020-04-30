import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PropertiesService } from 'src/app/shared/properties.service';

@Component({
  selector: 'app-oneproperty',
  templateUrl: './oneproperty.page.html',
  styleUrls: ['./oneproperty.page.scss'],
})
export class OnepropertyPage implements OnInit {
  property:any;
  spinner: boolean = false;
  constructor(private route: ActivatedRoute,
              public propertyService: PropertiesService,) { }

  ngOnInit() {
    this.spinner=true;
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id',id);
    this.propertyService.getPropertyContent(id).subscribe((data: any[]) => {
      this.property = data[0];
      this.spinner=false;
      console.log('property',this.property);
      });;
  }
            

}
