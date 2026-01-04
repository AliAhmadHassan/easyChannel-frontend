import { TranslateService } from '@ngx-translate/core';
import { UserService } from './services/user/user.service';
import { SharedService } from './services/shared/shared.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  
  showTemplate: boolean = false;
  isAdmin: boolean = false;
  public shared: SharedService;
  
  constructor(private userService: UserService)
    {
      this.shared = SharedService.getInstance();
  }

  ngOnInit(){
    this.shared.showTemplate.subscribe(
      show => this.showTemplate = show
    );

    this.shared.showIsAdmin.subscribe(
      isAdmin => this.isAdmin = isAdmin
    );
    
  }

  showContentWrapper(){
    return {
      'content-wrapper': this.shared.isLoggedIn()
    }
  }
}
