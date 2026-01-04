import { TranslateService } from '@ngx-translate/core';
import { User } from './../../model/user.model';
import { CurrentUser } from './../../model/current-user.model';
import { UserService } from './../../services/user/user.service';
import { Observable } from 'rxjs/Observable';
import { Injectable } from '@angular/core';
import { Route, Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, CanLoad } from '@angular/router';
import { SharedService } from '../../services/shared/shared.service';

@Injectable()
export class AuthGuard implements CanActivate {

  public shared: SharedService;
  

  constructor(private userService: UserService,
    private translate: TranslateService,
    private router: Router) {
    this.shared = SharedService.getInstance();
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | boolean {
      
    if (this.shared.isLoggedIn()) {
      return true;
    }
    if (localStorage.getItem("this.shared.token") != null && localStorage.getItem("this.shared.token") != "") {
      this.shared.token = localStorage.getItem("this.shared.token");
      this.shared.user = JSON.parse(localStorage.getItem("this.shared.user"));
      this.shared.user.profile = localStorage.getItem("this.shared.user.profile");
      this.shared.showTemplate.emit(true);
      this.shared.showIsAdmin.emit(this.shared.user.profile == "ADMIN");

      let language: string = localStorage.getItem('language');

      let browserLang = this.translate.getBrowserLang();
      this.translate.use(language);

      return true;
    }
    else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}