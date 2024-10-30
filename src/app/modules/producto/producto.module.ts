import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

// ARCHIVO DE RUTAS
import { ProductoRoutingModule } from './producto-routing.module';

// VISTAS
import { ProductoComponent } from './pages/producto/producto.component';
// COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    ProductoComponent,
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatTabsModule
  ],
  exports: [
    ProductoComponent,
    MatTabsModule
  ]
})
export class ProductoModule { }
