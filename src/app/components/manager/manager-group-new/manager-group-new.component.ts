import { ResponseApi } from './../../../model/response-api';
import { ActivatedRoute } from '@angular/router';
import { GroupService } from './../../../services/group/group.service';
import { SharedService } from './../../../services/shared/shared.service';
import { Group } from './../../../model/group.model';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-manager-group-new',
  templateUrl: './manager-group-new.component.html',
  styleUrls: ['./manager-group-new.component.css']
})
export class ManagerGroupNewComponent implements OnInit {

  @ViewChild("form")
  form: NgForm;

  group = new Group(0, '', '');
  shared : SharedService;
  message : {};
  classCss : {};
  
  constructor(
    private groupService: GroupService,
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
    this.groupService.findById(id).subscribe((responseApi:ResponseApi) => {
      this.group = responseApi.data;
  } , err => {
    this.showMessage({
      type: 'error',
      text: err['error']['errors'][0]
    });
  });
  }

  register(){
    this.message = {};
    this.groupService.createOrUpdate(this.group).subscribe((responseApi:ResponseApi) => {
        this.group = new Group(0, '', '');
        let groupRet : Group = responseApi.data;
        this.form.resetForm();
        this.showMessage({
          type: 'success',
          text: `Registered ${groupRet.name} successfully`
        });
    } , err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  getFormGroupClass(isInvalid: boolean, isDirty:boolean): {} {
    return {
      'form-group': true,
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
