import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpResponse} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {of} from 'rxjs/observable/of';
const custom_api_URL = environment.custom_api_URL;
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AgentService {
  agents: any[] = [];
  page = 1;
  totalPages = 1;
  constructor(private http: HttpClient,) { }

  GetAgents():any {
    console.log('> DataService.getPosts');
    if (this.agents.length > 0) {
    return of(this.agents);
    } else {
    return this.http.get(custom_api_URL + 'mynamespace/v1/agents', {observe: 'response'})
    .map(this.processPostData, this);
    }
  }

  processPostData(resp: HttpResponse<any[]>) {
    this.totalPages = +resp.headers.get('X-WP-TotalPages'); // unary (+) operator casts the string to a number
    resp.body.forEach((item: any) => {
    this.agents.push(item);
    });
    return this.agents;
    }

  getAgentContent(id) {
    return this.http.get(`${custom_api_URL}mynamespace/v1/agent/${id}`).pipe(
      map(agent => {
        return agent;
      })
    )
  }

}
