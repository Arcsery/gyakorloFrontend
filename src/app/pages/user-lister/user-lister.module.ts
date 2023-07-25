import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserListerRoutingModule } from './user-lister-routing.module';
import { UserListerComponent } from './user-lister.component';
import { UsersComponent } from './users/users.component';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    UserListerComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    UserListerRoutingModule,
    CardModule,
    ButtonModule
  ]
})
export class UserListerModule { }
