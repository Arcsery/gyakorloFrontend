import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserListerComponent } from './user-lister.component';

const routes: Routes = [{ path: '', component: UserListerComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserListerRoutingModule { }
