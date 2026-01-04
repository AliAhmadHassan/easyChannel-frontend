import { To } from './../../model/to.model';
import { ToService } from './../../services/to/to.service';
import { ResponseApi } from './../../model/response-api';
import { ActivatedRoute, Router } from '@angular/router';
import { MessageService } from './../../services/message/message.service';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../../services/shared/shared.service';
import { TimerObservable } from "rxjs/observable/TimerObservable";
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-direct-chat',
  templateUrl: './direct-chat.component.html',
  styleUrls: ['./direct-chat.component.css']
})
export class DirectChatComponent implements OnInit {

  shared: SharedService;
  id: number;
  message: {};
  classCss: {};
  to = new To(0, '', null, '', '', '', null, null);
  listMessage = [];
  private subscription: Subscription;
  
  constructor(private messageService: MessageService,
    private toService: ToService,
    private route: ActivatedRoute,
    private router: Router) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.updateInicialValues();
    let timer = TimerObservable.create(5000, 10000);
    this.subscription = timer.subscribe(t => {
      if(this.to != undefined)
        this.findAllMessageByToId(this.to.id);
    });
  }
  ngDoCheck() {
    this.updateInicialValues(); 
  }

  updateInicialValues(){
    if(this.id != this.route.snapshot.params['id']){
      this.id = this.route.snapshot.params['id'];
      this.findAllMessageByToId(this.id);
      this.findToId(this.id);
    }
  }

  findAllMessageByToId(toid: number) {
    this.messageService.findByToId(0, 10000, toid).subscribe((responseApi: ResponseApi) => {
      this.listMessage = responseApi['data']['content'];
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  findToId(toId: number) {
    this.toService.findById(toId).subscribe((responseApi: ResponseApi) => {
      this.to = responseApi.data;
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  toOnBlurMethod(){
    this.toService.createOrUpdate(this.to).subscribe((responseApi: ResponseApi) => {
      this.showMessage({
        type: 'success',
        text: 'Client information registred successfully'
      });
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  private showMessage(message: { type: string, text: string }): void {
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
    this.classCss['alert-' + type] = true;
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
