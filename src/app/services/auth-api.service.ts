import { Injectable } from '@angular/core';
import {Http, Headers} from '@angular/http';
// import 'rxjs/add/operator/map';
const apiUrl = 'https://apipaypal.9lessons.info/apipaypal/';

@Injectable()
export class AuthAPIService {

  constructor(public http: Http) {
    console.log('Hello AuthService Provider');
  }

  postData(credentials, type) {
    return new Promise((resolve, reject) => {
      const headers = new Headers();
      this.http.post(apiUrl + type, JSON.stringify(credentials), {headers: headers})
        .subscribe(res => {
          resolve(res.json());
        }, (err) => {
          reject(err);
        });

    });

  }
}