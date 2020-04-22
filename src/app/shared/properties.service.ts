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
export class PropertiesService {
  properties: any[] = [];
  page = 1;
  totalPages = 1;
  private data = [];
  constructor(private http: HttpClient,) { }


  Getproperties():any {
    console.log('> DataService.getPosts');
    if (this.properties.length > 0) {
    return of(this.properties);
    } else {
    return this.http.get(custom_api_URL + 'mynamespace/v1/propertys', {observe: 'response'})
    .map(this.processPostData, this);
    }
  }

  processPostData(resp: HttpResponse<any[]>) {
    this.totalPages = +resp.headers.get('X-WP-TotalPages'); // unary (+) operator casts the string to a number
    resp.body.forEach((item: any) => {
    this.properties.push(item);
    });
    return this.properties;
    }

    getPropertyContent(id) {
      return this.http.get(`${custom_api_URL}mynamespace/v1/property/${id}`).pipe(
        map(property => {
          return property;
        })
      )
    }


    setData(id, data) {
      this.data[id] = data;
    }
   
    getData(id) {
      return this.data[id];
    }

}
