import { MessageService } from './services/message/message.service';
import { SituationService } from './services/situation/situation.service';
import { DialogService } from './services/dialog/dialog.service';
import { AuthInterceptor } from './components/security/auth.interceptor';
import { routes } from './app.routes';
import { RouterModule } from '@angular/router';
import { AuthGuard } from './components/security/auth.guard';
import { ToTypeService } from './services/to-type/to-type.service';
import { RelUserIndiceService } from './services/rel-user-indice/rel-user-indice.service';
import { IndiceService } from './services/indice/indice.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { FromService } from './services/from/from.service';
import { GroupService } from './services/group/group.service';
import { MessageReceivedService } from './services/message-received/message-received.service';
import { MessageToSendService } from './services/message-to-send/message-to-send.service';
import { ToService } from './services/to/to.service';
import { UserService } from './services/user/user.service';
import { LoginComponent } from './components/security/login/login.component';
import { FooterComponent } from './components/footer/footer.component';
import { DirectChatComponent } from './components/direct-chat/direct-chat.component';
import { ManagerHomeComponent } from './components/manager/manager-home/manager-home.component';
import { ManagerMenuComponent } from './components/manager/manager-menu/manager-menu.component';
import { ManagerGroupListComponent } from './components/manager/manager-group-list/manager-group-list.component';
import { ManagerGroupNewComponent } from './components/manager/manager-group-new/manager-group-new.component';
import { ManagerSituationListComponent } from './components/manager/manager-situation-list/manager-situation-list.component';
import { ManagerSituationNewComponent } from './components/manager/manager-situation-new/manager-situation-new.component';
import { ManagerUserListComponent } from './components/manager/manager-user-list/manager-user-list.component';
import { ManagerUserNewComponent } from './components/manager/manager-user-new/manager-user-new.component';
import { HeaderComponent } from './components/header/header.component';
import { AttendantMenuComponent } from './components/attendant/attendant-menu/attendant-menu.component';
import { AttendantHomeComponent } from './components/attendant/attendant-home/attendant-home.component';



@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    FooterComponent,
    DirectChatComponent,
    ManagerHomeComponent,
    ManagerMenuComponent,
    ManagerGroupListComponent,
    ManagerGroupNewComponent,
    ManagerSituationListComponent,
    ManagerSituationNewComponent,
    ManagerUserListComponent,
    ManagerUserNewComponent,
    HeaderComponent,
    AttendantMenuComponent,
    AttendantHomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routes,
    RouterModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    AuthGuard,
    FromService,
    GroupService,
    IndiceService,
    MessageReceivedService,
    MessageToSendService,
    RelUserIndiceService,
    ToService,
    ToTypeService,
    UserService,
    DialogService,
    SituationService,
    MessageService,
    { provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}