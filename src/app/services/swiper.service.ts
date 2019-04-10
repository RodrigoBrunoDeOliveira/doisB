import { Injectable } from '@angular/core';
import { ScreenService } from './screen.service';
import { Swiper } from '../interfaces/swiper';

@Injectable({
  providedIn: 'root'
})
export class SwiperService {

  constructor(
    private screenService: ScreenService
  ) { }

  public chooseImgage(swiper: Swiper): Swiper {
    const device: string = this.screenService.getDevice();

    swiper.forEach( data => {
      if(device === 'mobile' || device === 'tablet') {
        data.img = '../../../assets/images/' + data.img + '.jpg';
      } else {
        data.img = '../../../assets/images/' + data.img + '.webp';
      }
    });

    return swiper;
  }
}
