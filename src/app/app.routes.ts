import { AttendantHomeComponent } from './components/attendant/attendant-home/attendant-home.component';
import { ManagerSituationListComponent } from './components/manager/manager-situation-list/manager-situation-list.component';
import { ManagerSituationNewComponent } from './components/manager/manager-situation-new/manager-situation-new.component';
import { ManagerGroupListComponent } from './components/manager/manager-group-list/manager-group-list.component';
import { ManagerGroupNewComponent } from './components/manager/manager-group-new/manager-group-new.component';
import { ManagerUserListComponent } from './components/manager/manager-user-list/manager-user-list.component';
import { ManagerUserNewComponent } from './components/manager/manager-user-new/manager-user-new.component';
import { ManagerHomeComponent } from './components/manager/manager-home/manager-home.component';
import { DirectChatComponent } from './components/direct-chat/direct-chat.component';


import { AuthGuard } from './components/security/auth.guard';
import { LoginComponent } from './components/security/login/login.component';

import { Component } from '@angular/core';
import{ Routes, RouterModule } from '@angular/router'
import { ModuleWithProviders } from '@angular/compiler/src/core';


export const ROUTES: Routes = [
    { path: 'login' , component: LoginComponent },
    { path: '' , component:  ManagerHomeComponent, canActivate: [AuthGuard]},
    {path: 'manager-user-new', component: ManagerUserNewComponent, canActivate: [AuthGuard]},
    {path: 'manager-user-new/:id', component: ManagerUserNewComponent, canActivate: [AuthGuard]},
    {path: 'manager-user-list', component: ManagerUserListComponent, canActivate: [AuthGuard]},

    {path: 'manager-group-new', component: ManagerGroupNewComponent, canActivate: [AuthGuard]},
    {path: 'manager-group-new/:id', component: ManagerGroupNewComponent, canActivate: [AuthGuard]},
    {path: 'manager-group-list', component: ManagerGroupListComponent, canActivate: [AuthGuard]},

    {path: 'manager-situation-new', component: ManagerSituationNewComponent, canActivate: [AuthGuard]},
    {path: 'manager-situation-new/:id', component: ManagerSituationNewComponent, canActivate: [AuthGuard]},
    {path: 'manager-situation-list', component: ManagerSituationListComponent, canActivate: [AuthGuard]},
    {path: 'manager-home', component: ManagerHomeComponent, canActivate: [AuthGuard]},
    {path: 'attendant-home', component: AttendantHomeComponent, canActivate: [AuthGuard]},

    {path: 'direct-chat/:id', component: DirectChatComponent, canActivate: [AuthGuard]}

]

export const routes: ModuleWithProviders = RouterModule.forRoot(ROUTES);