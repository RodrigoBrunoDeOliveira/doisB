import { Component } from '@angular/core';

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent {
  public swiper: any = [
    { active: true, img: '../../../assets/images/img_01.webp'},
    { active: false, img: '../../../assets/images/img_02.webp'},
    { active: false, img: '../../../assets/images/img_03.webp'},
  ];

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
    // for(let i = 0; this.swiper.length >= i; i++) {
    //   if(this.swiper[i].active) {
    //     if(this.swiper[i + 1]) {
    //       this.swiper[i + 1].active = true;
    //       this.swiper[i].active = false;
    //       return;
    //     } else if(!this.swiper[i + 1]) {
    //       this.swiper[0].active = true;
    //       this.swiper[i].active = false;
    //       return;
    //     }
    //   };
    // }
  }
}
