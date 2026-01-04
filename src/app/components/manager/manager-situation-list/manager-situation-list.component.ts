import { DialogService } from './../../../services/dialog/dialog.service';
import { ResponseApi } from './../../../model/response-api';
import { ActivatedRoute, Router } from '@angular/router';
import { SituationService } from './../../../services/situation/situation.service';
import { SharedService } from './../../../services/shared/shared.service';
import { NgForm } from '@angular/forms';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Situation } from '../../../model/situation.model';

@Component({
  selector: 'app-manager-situation-list',
  templateUrl: './manager-situation-list.component.html',
  styleUrls: ['./manager-situation-list.component.css']
})
export class ManagerSituationListComponent implements OnInit {


  page:number=0;
  count:number=5;
  pages:Array<number>;
  shared : SharedService;
  message : {};
  classCss : {};
  listSituation=[];

  constructor(
    private dialogService: DialogService,
    private situationService: SituationService,
    private router: Router) { 
      this.shared = SharedService.getInstance();
  }

  ngOnInit() {
    this.findAll(this.page,this.count);
  }

  findAll(page:number,count:number){
    this.situationService.findAll(page,count).subscribe((responseApi:ResponseApi) => {
        this.listSituation = responseApi['data']['content'];
        this.pages = new Array(responseApi['data']['totalPages']);
    } , err => {
      this.showMessage({
        type: 'error',
        text: err['error']['errors'][0]
      });
    });

  }

  edit(id: number){
    this.router.navigate(['/situation-new',id]);
  }

  delete(id: number){
    this.dialogService.confirm('Do you want to delete the situation ?')
      .then((candelete:boolean) => {
          if(candelete){
            this.message = {};
            this.situationService.delete(id).subscribe((responseApi:ResponseApi) => {
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
