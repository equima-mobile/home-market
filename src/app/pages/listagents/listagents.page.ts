import { Component, OnInit } from '@angular/core';
import { AgentService } from 'src/app/shared/agent.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listagents',
  templateUrl: './listagents.page.html',
  styleUrls: ['./listagents.page.scss'],
})
export class ListagentsPage implements OnInit {
  agents:any[];
  spinner: boolean = false;
  constructor(public agentService:AgentService,
              private router: Router,) { }

  ngOnInit() {
    this.spinner=true;
    this.agentService.GetAgents().subscribe((data: any[]) => {
      this.agents = data;
      this.spinner=false;
      console.log('agents',this.agents);
      });
  }

  infoagent(id){
    console.log('id',id);
    this.router.navigate(['/agent', id]);
  }

}
