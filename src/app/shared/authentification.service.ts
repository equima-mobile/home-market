import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Storage } from '@ionic/storage';
import { User, User_base } from '../models/user';


const ENDPOINT_URL = environment.endpointURL;

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {
  isLoggedIn = false;
  token:any
  constructor(private http: HttpClient,
              private storage: Storage) { }

  doLogin(username, password) {
    // return this.http.post(ENDPOINT_URL + 'jwt-auth/v1/token', {
    // username: username,
    // password: password
    // });

        return this.http.post(ENDPOINT_URL + 'jwt-auth/v1/token',
        {username: username, password: password}
      ).pipe(
        tap(token => {
          this.storage.set('token', token)
          .then(
            () => {
              console.log('Token Stored');
            },
            error => console.error('Error storing item', error)
          );
          this.token = token;
          this.isLoggedIn = true;
          return token;
        }),
      );

    }

    generetoken(username, password){
      return this.http.post(ENDPOINT_URL + 'jwt-auth/v1/token',
        {username: username, password: password}
      ).pipe(
        tap(token => {
          this.storage.set('token_genere', token)
          .then(
            () => {
              console.log('Token Stored');
            },
            error => console.error('Error storing item', error)
          );
          this.token = token;
          this.isLoggedIn = true;
          return token;
        }),
      );
    }

    validateAuthToken(token) {
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', 'Basic ' + token);
    return this.http.post(ENDPOINT_URL + 'jwt-auth/v1/token/validate?token="'+token+'"',
    {}, {headers: headers});
    }


    doRegister(user_data, token){
      const headers = new HttpHeaders({
        'Authorization': 'Bearer' + token
      });
      // headers = headers.set('Authorization', 'Basic ' + token);
      return this.http.post(ENDPOINT_URL + 'wp/v2/users?token="'+token+'"', user_data,{headers: headers});
    }

    logout() {
        return new Promise((resolve: any, reject: any) => {
          this.storage.remove("token");
          this.isLoggedIn = false;
          delete this.token;
          resolve(this.isLoggedIn);
        });
    }


  
    Getuser(token) {
      const headers = new HttpHeaders({
        'Authorization': 'Bearer' + token
      });
      return this.http.get(ENDPOINT_URL + 'wp/v2/users', { headers: headers })
      .pipe(
        tap(user => {
          return user;
        })
      )
    }
  

    getToken() {
      return this.storage.get('token').then(
        (data) => {
          this.token = data;
          if(this.token != null) {
            this.isLoggedIn=true;
          } else {
            this.isLoggedIn=false;
          }
        },
        (error) => {
          this.token = null;
          this.isLoggedIn=false;
        }
      );
    }
  
    

}
