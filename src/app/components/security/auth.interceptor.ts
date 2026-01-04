import { TranslateService } from '@ngx-translate/core';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpHandler, HttpEvent, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { SharedService } from '../../services/shared/shared.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    shared : SharedService;
    logVisible: boolean = false;
    constructor(private translate: TranslateService) { 
          this.shared = SharedService.getInstance();
    }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>>  {
        if (localStorage.getItem("this.shared.token") != null && localStorage.getItem("this.shared.token") != "") {
            this.shared.token = localStorage.getItem("this.shared.token");
            this.shared.user = JSON.parse(localStorage.getItem("this.shared.user"));
            this.shared.user.profile = localStorage.getItem("this.shared.user.profile");
            this.shared.showTemplate.emit(true);
            this.shared.showIsAdmin.emit(this.shared.user.profile == "ADMIN");
      
            let language: string = localStorage.getItem('language');
      
            let browserLang = this.translate.getBrowserLang();
            this.translate.use(language);

          }

        let authRequest : any;
        if(this.logVisible){console.log(`Interceptor: ${req.url}`);}
            
        if(this.shared.isLoggedIn()){
            authRequest = req.clone({
                setHeaders: {
                    'Authorization' : this.shared.token
                }
            });
            if(this.logVisible){console.log(`Interceptor-Header: ${JSON.stringify(authRequest.headers)}`);
                console.log(`Interceptor-Body: ${JSON.stringify(authRequest.body)}`);
            }
            return next.handle(authRequest);
        } else {
            if(this.logVisible){console.log(`Interceptor: ${req.url}`)
                console.log(`Interceptor-Header: ${JSON.stringify(req.headers)}`);
                console.log(`Interceptor-Body: ${JSON.stringify(req.body)}`);}
            return next.handle(req);
        }
    }

}