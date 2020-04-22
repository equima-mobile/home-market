import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { PropertiesService } from 'src/app/shared/properties.service';

@Component({
  selector: 'app-homeresult',
  templateUrl: './homeresult.page.html',
  styleUrls: ['./homeresult.page.scss'],
})
export class HomeresultPage implements OnInit {
  resultproperties:any;
  constructor(private router: Router,
              public propertyService: PropertiesService,) { }

  ngOnInit() {
    this.resultproperties= this.propertyService.getData(1);
    console.log('result',this.resultproperties);
  }

  detailproperty(id){
    console.log('id',id);
    this.router.navigate(['/property', id]);
  }

}
