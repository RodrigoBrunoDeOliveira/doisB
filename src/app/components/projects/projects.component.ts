import { Swiper } from './../../interfaces/swiper';
import { Component } from '@angular/core';
import { SwiperService } from 'src/app/services/swiper.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  public swiper: Swiper = [
    { 
      active: true,
      img: 'img_01',
      swiperData: {
        date: 'march 15, 2018',
        text: 'We have worked on this project for three months to completely extend and redesign the old 2-storey house.',
        title: '3119 MULBERRY LN, NEWCASTLE, OK',
        type: 'ARCHITECTURE'
      }
    }, {
      active: false,
      img: 'img_02',
      swiperData: {
        date: 'JUNE 19, 2018',
        text: 'Our team of exterior designers and architects integrated the latest innovations in this residential project.',
        title: '4367 LIBERTY ST, IRVING, TX',
        type: 'EXTERIOR DESIGN'
      }
    }, {
      active: false,
      img: 'img_03',
      swiperData: {
        date: 'march 15, 2018',
        text: 'We have worked on this project for three months to completely extend and redesign the old 2-storey house.',
        title: '3119 MULBERRY LN, NEWCASTLE, OK',
        type: 'ARCHITECTURE'
      }
    }
  ];

  constructor(
    private swiperService: SwiperService
  ) {
    this.swiper = this.swiperService.chooseImgage(this.swiper);
  }

  public chooseSwiper(index: number): void {
    this.swiper.forEach(data => { data.active = false });
    this.swiper[index].active = true;
  }
}
