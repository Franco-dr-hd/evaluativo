import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTabsModule } from '@angular/material/tabs';

// ARCHIVO DE RUTAS
import { ProductoRoutingModule } from './producto-routing.module';

// VISTAS
import { ProductoComponent } from './pages/producto/producto.component';
// COMPONENTES LOCALES
import { CardComponent } from './components/card/card.component';
import { CarruselComponent } from './components/carrusel/carrusel.component';

@NgModule({
  declarations: [
    ProductoComponent,
    CardComponent,
    CarruselComponent
   
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatTabsModule
  ],
  exports: [
    ProductoComponent,
    CardComponent,
    MatTabsModule
  ]
})
export class ProductoModule { }
