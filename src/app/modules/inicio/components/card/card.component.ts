import { Component } from '@angular/core';
// IMPORTAMOS INTERFAZ
import { Animal } from 'src/app/models/animal';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  // PROPIEDAD PÚBLICA (TIPO ARRAY)
  public info: Animal[];

  constructor(){
    this.info = [
      {
        id: "producto",
        nombre: "Mate uruguayo con bombilla imperial",
        edad: 50000,
        imagen: "https://dcdn.mitiendanube.com/stores/001/666/155/products/m91-c9f1314c0365d7b27616246266979128-1024-1024.webp",
        alt: "Mate uruguayo con bombilla imperial"
      },
      {
        id: "producto",
        nombre: "Termo Stanley 1LTS",
        edad: 114000,
        imagen: "https://www.doiteargentina.com.ar/wp-content/uploads/2018/06/46715-TERMO-STANLEY-ADVENTURE-1LT-GREEN.jpg",
        alt: "Termo Stanley de un litro"
      },
      {
        id: "producto",
        nombre: "Yerba Canarias 1kg Clasica",
        edad: 10000,
        imagen: "https://acdn.mitiendanube.com/stores/313/507/products/canarias-48af651472263d23f117060379255540-640-0.jpg",
        alt: "Yerba Canarias de un kilo"
      }
    ]
  }
}
