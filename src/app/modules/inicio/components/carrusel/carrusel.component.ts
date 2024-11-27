import { Component } from '@angular/core';

// import Swiper bundle with all modules installed

import {Swiper} from 'swiper'

// import styles bundle

import 'swiper/css/bundle';

// init Swiper:

const swiper = new Swiper('.swiper', {
  speed: 400,
  spaceBetween: 100,
});

@Component({
  selector: 'app-carrusel',
  templateUrl: './carrusel.component.html',
  styleUrls: ['./carrusel.component.css']
})
export class CarruselComponent {

}
