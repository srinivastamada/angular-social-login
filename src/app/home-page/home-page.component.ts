import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from 'angular-6-social-login';
@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {
  public data: any;
  public userData: any;

  constructor(
    public user: UserService,
    public socialAuthService: AuthService
  ) {
    this.userData = this.user.getData();
  }

  ngOnInit() {
    this.user.sessionOut();
  }

  logout() {
    this.socialAuthService.signOut().then(data => {
      this.user.logOut();
    });
  }
}
