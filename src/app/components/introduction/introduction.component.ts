import { Swiper } from './../../interfaces/swiper';
import { Component } from '@angular/core';
import { SwiperService } from 'src/app/services/swiper.service';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  public swiper: Swiper = [
    { active: true, img: 'img_01'},
    { active: false, img: 'img_02'},
    { active: false, img: 'img_03'},
  ];

  constructor(
    private swiperService: SwiperService
  ) {
    this.swiper = this.swiperService.chooseImgage(this.swiper);
  }
  
  public backImg(): void {
    for(let i = 0; this.swiper.length >= i; i++) {
      if(this.swiper[i].active) {
        if(i - 1 >= 0) {
          this.swiper[i - 1].active = true;
          this.swiper[i].active = false;
          return;
        } else {
          this.swiper[this.swiper.length - 1].active = true;
          this.swiper[i].active = false;
          return;
        }
      };
    }
  }

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
