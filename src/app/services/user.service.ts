import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
@Injectable()
export class UserService {
  constructor(public router: Router) {}

  async storeData(data) {
    localStorage.setItem('userData', JSON.stringify(data));
    const newData = await this.getData();
    return this.router.navigate(['home'], newData);
  }

  getData() {
    return JSON.parse(localStorage.getItem('userData'));
  }

  sessionIn() {
    let A;
    if (this.getData()) {
      A = this.router.navigate(['home'], this.getData());
    }
    return A;
  }

  sessionOut() {
    let A;
    if (!this.getData()) {
      A = this.router.navigate(['']);
    }
    return A;
  }

  logOut() {
    localStorage.setItem('userData', '');
    localStorage.clear();
    return this.router.navigate(['']);
  }
}