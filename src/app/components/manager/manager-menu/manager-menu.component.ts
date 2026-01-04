import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-manager-menu',
  templateUrl: './manager-menu.component.html',
  styleUrls: ['./manager-menu.component.css']
})
export class ManagerMenuComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  user(id: number){
    this.router.navigate(['/manager-user-new',id]);
  }
}
