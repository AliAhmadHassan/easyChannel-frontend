import { ResponseApi } from './../../../model/response-api';
import { ActivatedRoute } from '@angular/router';
import { SituationService } from './../../../services/situation/situation.service';
import { SharedService } from './../../../services/shared/shared.service';
import { Situation } from './../../../model/situation.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-manager-situation-new',
  templateUrl: './manager-situation-new.component.html',
  styleUrls: ['./manager-situation-new.component.css']
})
export class ManagerSituationNewComponent implements OnInit {
  @ViewChild("form")
  form: NgForm;

  situation = new Situation(0, '', false);
  shared : SharedService;
  message : {};
  classCss : {};
  
  constructor(
    private situationService: SituationService,
    private route: ActivatedRoute) { 
      this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    let id: number = this.route.snapshot.params['id'];
    if(id != undefined){
      this.findById(id);
    }
  }

  findById(id: number){
    this.situationService.findById(id).subscribe((responseApi:ResponseApi) => {
      this.situation = responseApi.data;
  } , err => {
    this.showMessage({
      type: 'error',
      text: err['error']['errors'][0]
    });
  });
  }

  register(){
    this.message = {};
    this.situationService.createOrUpdate(this.situation).subscribe((responseApi:ResponseApi) => {
        this.situation = new Situation(0, '', false);
        let situationRet : Situation = responseApi.data;
        this.form.resetForm();
        this.showMessage({
          type: 'success',
          text: `Registered ${situationRet.name} successfully`
        });
    } , err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  getFormSituationClass(isInvalid: boolean, isDirty:boolean): {} {
    return {
      'form-situation': true,
      'has-error' : isInvalid  && isDirty,
      'has-success' : !isInvalid  && isDirty
    };
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
