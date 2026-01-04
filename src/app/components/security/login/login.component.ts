import { CurrentUser } from './../../../model/current-user.model';
import { SharedService } from './../../../services/shared/shared.service';
import { Router } from '@angular/router';
import { UserService } from './../../../services/user/user.service';
import { Component, OnInit } from '@angular/core';
import { User } from '../../../model/user.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user = new User(0, '', '', '', '', null);
  shared: SharedService;
  message: string;
  
  constructor(
    private UserService: UserService,
    private router: Router
  ) { 
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
  }

  login(){
    this.message = '';
    this.UserService.login(this.user).subscribe((userAuthentication: CurrentUser) => {
      this.shared.token = userAuthentication.token;
      this.shared.user = userAuthentication.user;
      this.shared.user.profile = this.shared.user.profile.substring(5);
      this.shared.showTemplate.emit(true);
      this.shared.showIsAdmin.emit(this.shared.user.profile == "ADMIN");

      if(this.shared.user.profile == "ADMIN"){
        this.router.navigate(['/manager-home']);
      } else if(this.shared.user.profile == "MANAGER"){
        this.router.navigate(['/manager-home']);
      } else if(this.shared.user.profile == "ATTENDANT"){
        this.router.navigate(['/attendant-home']);
      }


      localStorage.setItem('this.shared.token', this.shared.token);
      localStorage.setItem('this.shared.user',  JSON.stringify(this.shared.user));
      localStorage.setItem('this.shared.user.profile',  this.shared.user.profile);

    }, err => {
      this.shared.token = null;
      this.shared.user = null;
      this.shared.showTemplate.emit(false);
      this.message = 'Erro';
    });
  }

  cancelLogin(){
    this.message = '';
    this.user = new User(0, '', '', '', '', null);
    window.location.href = '/login';
    window.location.reload();
  }

  getFormGroupClass(isInvalid: boolean, isDirty:boolean): {} {
    return {
      'form-group': true,
      'has-error' : isInvalid  && isDirty,
      'has-success' : !isInvalid  && isDirty
    };
  }
}
