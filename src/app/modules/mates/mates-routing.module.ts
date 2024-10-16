import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateComponent } from './Page/mate/mate.component';

const routes: Routes = [{path: "Mates", component:MateComponent}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatesRoutingModule { }
