import { GroupService } from './../../../services/group/group.service';
import { UserService } from './../../../services/user/user.service';
import { SharedService } from './../../../services/shared/shared.service';
import { ResponseApi } from './../../../model/response-api';
import { Component, OnInit, ViewChild } from '@angular/core';
import { User } from '../../../model/user.model';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-manager-user-new',
  templateUrl: './manager-user-new.component.html',
  styleUrls: ['./manager-user-new.component.css']
})
export class ManagerUserNewComponent implements OnInit {

  @ViewChild("form")
  form: NgForm;

  id: number;
  user = new User(0, '', '', '', '', null);
  shared: SharedService;
  message: {};
  classCss: {};
  listGroup = [];

  constructor(
    private userService: UserService,
    private groupService: GroupService,
    private route: ActivatedRoute,
    private router: Router) {
    this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    console.log("ngOnInit");
    this.updateValues();
  }

  ngDoCheck() {
    console.log("ngDoCheck");
    this.updateValues();
    
  }

  private updateValues() {
    if (this.id != this.route.snapshot.params['id']) {
      this.id = this.route.snapshot.params['id'];

      if (this.id != undefined) {
        this.findById(this.id);
      }
      this.findAllGroups();
      console.log("Atualizou");
    }
  }



  findById(id: number) {
    this.userService.findById(id).subscribe((responseApi: ResponseApi) => {
      this.user = responseApi.data;
      this.user.password = '';
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  findAllGroups() {
    this.groupService.findAll(0, 1000).subscribe((responseApi: ResponseApi) => {
      this.listGroup = responseApi['data']['content'];
    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  register() {
    this.message = {};
    this.userService.createOrUpdate(this.user).subscribe((responseApi: ResponseApi) => {
      this.user = new User(0, '', '', '', '', null);
      let userRet: User = responseApi.data;
      this.form.resetForm();
      this.showMessage({
        type: 'success',
        text: `Registered ${userRet.name} successfully`
      });

    }, err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });
  }

  getFormGroupClass(isInvalid: boolean, isDirty: boolean): {} {
    return {
      'form-group': true,
      'has-error': isInvalid && isDirty,
      'has-success': !isInvalid && isDirty
    };
  }

  private showMessage(message: { type: string, text: string }): void {
    this.message = message;
    this.buildClasses(message.type);
    setTimeout(() => {
      this.message = undefined;
      if (message.type == "success") {
        this.router.navigate(['/user-list']);
      }
    }, 3000);
  }

  private buildClasses(type: string): void {
    this.classCss = {
      'alert': true
    }
    this.classCss['alert-' + type] = true;
  }
}
