import { Component, Input } from '@angular/core';
import { Swiper } from 'src/app/interfaces/swiper';

@Component({
  selector: 'app-swiper-profile',
  templateUrl: './swiper-profile.component.html',
  styleUrls: ['./swiper-profile.component.scss']
})
export class SwiperProfileComponent {
  @Input() swiper: Swiper;

  public changeSwiper(index: number): void {
    this.swiper.forEach( data => { data.active = false });
    this.swiper[index].active = true;
  }
}