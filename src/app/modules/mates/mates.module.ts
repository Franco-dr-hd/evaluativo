import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatesRoutingModule } from './mates-routing.module';
import { MateComponent } from './Page/mate/mate.component';


@NgModule({
  declarations: [
    MateComponent
  ],
  imports: [
    CommonModule,
    MatesRoutingModule
  ]
})
export class MatesModule { }
