import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from 'angular-6-social-login';
import { ActivatedRoute } from '@angular/router';
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
    public socialAuthService: AuthService,
    public route: ActivatedRoute
  ) {
    this.userData = this.user.getData();

    this.route.params.subscribe(params => console.log(params));
  }

  ngOnInit() {
    this.user.sessionOut();
    // console.log(this.userData);
  }

  logout() {
    this.socialAuthService.signOut().then(data => {
      this.user.logOut();
    });
  }
}
