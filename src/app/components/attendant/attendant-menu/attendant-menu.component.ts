import { MessageReceivedService } from './../../../services/message-received/message-received.service';
import { User } from './../../../model/user.model';
import { ResponseApi } from './../../../model/response-api';
import { DialogService } from './../../../services/dialog/dialog.service';
import { Router } from '@angular/router';
import { SharedService } from './../../../services/shared/shared.service';
import { ToService } from './../../../services/to/to.service';
import { Component, OnInit } from '@angular/core';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-attendant-menu',
  templateUrl: './attendant-menu.component.html',
  styleUrls: ['./attendant-menu.component.css']
})
export class AttendantMenuComponent implements OnInit {

  listTo = [];
  listChat = [];
  shared : SharedService;
  message : {};
  classCss : {};
  private subscription: Subscription;

  constructor(private messageReceivedService: MessageReceivedService,
    private toService: ToService,
    private dialogService: DialogService,
    private router: Router
    ) { 
      this.shared = SharedService.getInstance();
    }

  ngOnInit() {
    this.findChat();
    this.findMyClientes();

  /*  let timer = TimerObservable.create(250, 500);
    this.subscription = timer.subscribe(t => {
      this.findChat();
    });*/

    let timer = TimerObservable.create(10000, 20000).subscribe(t => {
      this.findMyClientes();
    });
  }

  findMyClientes(){
    let user:User = JSON.parse(localStorage.getItem("this.shared.user"));
    this.toService.findByUserPreferredId(0, 10000, user.id).subscribe((responseApi: ResponseApi) => {
      this.listTo = responseApi['data']['content'];
    }, err => {
      this.showMessage({
        type: 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  findChat(){
    this.messageReceivedService.findByUnreaded(0, 10).subscribe((responseApi: ResponseApi)=>{
      if(responseApi['data'] != null)
        this.listChat = responseApi['data']['content'];
    }, err => {
      this.showMessage({
        type: 'error',
        text : err['error']['errors'][0]
      });
    });
  }

  directChat(id: number){
    this.messageReceivedService.updateToReaded(id).subscribe((result: string) =>{
    }, err => {
    });
    this.router.navigate(['/direct-chat',id]);
  }

  private showMessage(message: {type: string, text: string}): void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
    }, 3000);
  }

  private buildClasses(type: string): void {
    this.classCss = {
      'alert': true
    }
    this.classCss['alert-'+type] =  true;
  }
}
