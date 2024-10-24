import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatesRoutingModule } from './mates-routing.module';
import { MatesComponent } from './pages/mates/mates.component';


@NgModule({
  declarations: [
    MatesComponent
  ],
  imports: [
    CommonModule,
    MatesRoutingModule
  ]
})
export class MatesModule { }
