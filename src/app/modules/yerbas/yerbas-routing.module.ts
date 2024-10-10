import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComunesComponent } from './pages/comunes/comunes.component';
import { SaborizadasComponent } from './pages/saborizadas/saborizadas.component';
import { DespaladasComponent } from './pages/despaladas/despaladas.component';
import { GeneralComponent } from './general/general.component';

const routes: Routes = [
  {
    path:'Comunes',component: ComunesComponent
  },
  {
    path:'Despaladas',component: DespaladasComponent
  },
  {
    path:'Saborizadas',component: SaborizadasComponent
  },
  {
    path:'General',component: GeneralComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class YerbasRoutingModule { }


