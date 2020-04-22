import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AgentService } from 'src/app/shared/agent.service';

@Component({
  selector: 'app-agent',
  templateUrl: './agent.page.html',
  styleUrls: ['./agent.page.scss'],
})
export class AgentPage implements OnInit {
  agent:any;
  spinner: boolean = false;
  constructor(public agentService:AgentService,
              private route: ActivatedRoute,) { }

  ngOnInit() {
    this.spinner=true;
    const id = this.route.snapshot.paramMap.get('id');
    this.agentService.getAgentContent(id).subscribe((data: any[]) => {
      this.agent = data[0];
      this.spinner=false;
      console.log('property',this.agent);
      });;
  }

}
