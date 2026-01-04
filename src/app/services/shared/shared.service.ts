import { TranslateService } from '@ngx-translate/core';
import { User } from '../../model/user.model';
import { Injectable, EventEmitter } from '@angular/core';

@Injectable()
export class SharedService {
  
  public static instance: SharedService = null;
  user : User;
  token: string;
  showTemplate = new EventEmitter<boolean>();
  showIsAdmin = new EventEmitter<boolean>();


  constructor() { 
    SharedService.instance = SharedService.instance || this

    /*if ((SharedService.instance.user == null || SharedService.instance.user.id == 0 ) 
      && (localStorage.getItem("this.shared.token") != null && localStorage.getItem("this.shared.token") != "")) {
        SharedService.instance.token = localStorage.getItem("this.shared.token");
        SharedService.instance.user = JSON.parse(localStorage.getItem("this.shared.user"));
        SharedService.instance.user.profile = localStorage.getItem("this.shared.user.profile");
        SharedService.instance.showTemplate.emit(true);
        SharedService.instance.showIsAdmin.emit(SharedService.instance.user.profile == "ADMIN");
    }*/

    return SharedService.instance;
  }

  public static getInstance(){
    if(this.instance == null){
      this.instance = new SharedService();
    }

    return this.instance;
  }

  isLoggedIn():boolean {
    if(this.user == null || this.user.id == 0){
      return false;
    }
    return this.user.username != '';
  }

isAdmin():boolean {
    if(localStorage.getItem("this.shared.user.profile") == "ADMIN"){
      return true;
    } else{
      return false;
    }
  }

}
