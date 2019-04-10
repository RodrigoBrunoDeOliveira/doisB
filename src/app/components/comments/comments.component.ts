import { Component } from '@angular/core';
import { Swiper } from 'src/app/interfaces/swiper';
import { SwiperService } from 'src/app/services/swiper.service';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  public swiper: Swiper = [
    {
      active: true,
      img: 'img_01',
      swiperData: {
        name: 'KATE WILLIAMS',
        office: 'Entrepreneur',
        text: 'I have worked with many companies offering design & architecture services, and out of all you were one who really stood out from the rest and did a great job.'
      }
    }, {
      active: false,
      img: 'img_02',
      swiperData: {
        name: 'ANN LEE',
        office: 'Freelancer',
        text: 'I was looking for top-notch creativity and quality service and I found what I needed in your team. You took all my ideas and demands into consideration and made a great project.'
      }
    }, {
      active: false,
      img: 'img_03',
      swiperData: {
        name: 'SAM MCMILLAN',
        office: 'Manager',
        text: 'I selected Spectrum because of their architects’ rigorous design background and education. They exceeded my expectations and did a great a job on extending and redesigning my house.'
      }
    }
  ];

  constructor(
    private swiperService: SwiperService
  ) {
    this.swiper = this.swiperService.chooseImgage(this.swiper);
  }
}
