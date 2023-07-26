import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SingleUserRoutingModule } from './single-user-routing.module';
import { SingleUserComponent } from './single-user.component';

import { DividerModule } from 'primeng/divider';
import { FieldsetModule } from 'primeng/fieldset';
import { SplitterModule } from 'primeng/splitter';
import { TabViewModule } from 'primeng/tabview';
import { ButtonModule } from 'primeng/button';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';


@NgModule({
  declarations: [
    SingleUserComponent
  ],
  imports: [
    CommonModule,
    SingleUserRoutingModule,
    DividerModule,
    FieldsetModule,
    SplitterModule,
    TabViewModule,
    ButtonModule,
    InputNumberModule,
    InputTextareaModule
  ]
})
export class SingleUserModule { }
