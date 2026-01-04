import { Component, OnInit } from '@angular/core';
import { ResponseApi } from './../../../model/response-api';
import { GroupService } from './../../../services/group/group.service';
import { DialogService } from './../../../services/dialog/dialog.service';
import { SharedService } from './../../../services/shared/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-manager-group-list',
  templateUrl: './manager-group-list.component.html',
  styleUrls: ['./manager-group-list.component.css']
})
export class ManagerGroupListComponent implements OnInit {

  page:number=0;
  count:number=5;
  pages:Array<number>;
  shared : SharedService;
  message : {};
  classCss : {};
  listGroup=[];

  constructor(
    private dialogService: DialogService,
    private groupService: GroupService,
    private router: Router) { 
      this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.findAll(this.page,this.count);
  }

  findAll(page:number,count:number){
    this.groupService.findAll(page,count).subscribe((responseApi:ResponseApi) => {
        this.listGroup = responseApi['data']['content'];
        this.pages = new Array(responseApi['data']['totalPages']);
    } , err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });

  }

  edit(id: number){
    this.router.navigate(['/group-new',id]);
  }

  delete(id: number){
    this.dialogService.confirm('Do you want to delete the group ?')
      .then((candelete:boolean) => {
          if(candelete){
            this.message = {};
            this.groupService.delete(id).subscribe((responseApi:ResponseApi) => {
                this.showMessage({
                  type: 'success',
                  text: `Record deleted`
                });
                this.findAll(this.page,this.count);
            } , err => {
              this.showMessage({
                type: 'error',
                text: err['error']['errors'][0]
              });
            });
          }
      });
  }

  setNextPage(event:any){
    event.preventDefault();
    if(this.page+1 < this.pages.length){
      this.page =  this.page +1;
      this.findAll(this.page,this.count);
    }
  }

  setPreviousPage(event:any){
    event.preventDefault();
    if(this.page > 0){
      this.page =  this.page - 1;
      this.findAll(this.page,this.count);
    }
  }

  setPage(i,event:any){
    event.preventDefault();
    this.page = i;
    this.findAll(this.page,this.count);
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
