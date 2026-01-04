import { User } from './../../model/user.model';
import { Router } from '@angular/router';
import { UserService } from './../../services/user/user.service';
import { SharedService } from './../../services/shared/shared.service';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public shared: SharedService;
  isAdmin: boolean = false;

  constructor(private userService: UserService,
              private router: Router){
      this.shared = SharedService.getInstance();
      this.shared.user = new User(0, '', '', '', '', null);
  }

  ngOnInit(){
    this.shared.showIsAdmin.subscribe(
      isAdmin => this.isAdmin = isAdmin
    );
  }

  signOut() : void {
    this.shared.token = null;
    this.shared.user = null;
    
    localStorage.setItem('this.shared.token', "");
      localStorage.setItem('this.shared.user',  "");
      localStorage.setItem('this.shared.user.profile',  "");

    window.location.href = '/login';
    window.location.reload();
  }
}
