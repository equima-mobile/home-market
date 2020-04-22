import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Platform } from '@ionic/angular';
import { PropertiesService } from 'src/app/shared/properties.service';
import { AgentService } from 'src/app/shared/agent.service';

@Component({
  selector: 'app-oneproperty',
  templateUrl: './oneproperty.page.html',
  styleUrls: ['./oneproperty.page.scss'],
})
export class OnepropertyPage implements OnInit {
  property:any;
  id_agent:any;
  agent:any;
  spinner: boolean = false;
  constructor(private route: ActivatedRoute,
              public propertyService: PropertiesService,
              public agentService:AgentService,
              private platform: Platform,) { }

  ngOnInit() {
    this.spinner=true;
    const id = this.route.snapshot.paramMap.get('id');
    console.log('id',id);
    this.propertyService.getPropertyContent(id).subscribe((data: any[]) => {
      this.property = data[0];
      console.log('property',this.property);
      this.id_agent=data[0].ID_agent;
      this.getAgent(this.id_agent);
      });;
  }

  getAgent(id){
    this.agentService.getAgentContent(id).subscribe((data: any[]) => {
      this.agent = data[0];
      this.spinner=false;
      console.log('agent',this.agent);
      });;
  }
            

}
