import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { YerbasRoutingModule } from './yerbas-routing.module';
import { SaborizadasComponent } from './pages/saborizadas/saborizadas.component';
import { ComunesComponent } from './pages/comunes/comunes.component';
import { DespaladasComponent } from './pages/despaladas/despaladas.component';
import { GeneralComponent } from './general/general.component';


@NgModule({
  declarations: [
    SaborizadasComponent,
    ComunesComponent,
    DespaladasComponent,
    GeneralComponent
  ],
  imports: [
    CommonModule,
    YerbasRoutingModule
  ]
})
export class YerbasModule { }
