import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MatesComponent } from './pages/mates/mates.component';

const routes: Routes = [
  {
    path:'mates',component: MatesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MatesRoutingModule { }
