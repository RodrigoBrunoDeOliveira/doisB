import { Swiper } from './../../interfaces/swiper';
import { Component, Input } from '@angular/core';

// TODO: falta fazer trocar a imagem a cada 3s
@Component({
  selector: 'app-swiper',
  templateUrl: './swiper.component.html',
  styleUrls: ['./swiper.component.scss']
})
export class SwiperComponent {
  @Input() swiper: Swiper;

  public nextImg(): void {
    for(let i = 0; this.swiper.length >= i; i++) {
      if(this.swiper[i].active) {
        if(this.swiper[i + 1]) {
          this.swiper[i + 1].active = true;
          this.swiper[i].active = false;
          return;
        } else if(!this.swiper[i + 1]) {
          this.swiper[0].active = true;
          this.swiper[i].active = false;
          return;
        }
      };
    }
  }
}
