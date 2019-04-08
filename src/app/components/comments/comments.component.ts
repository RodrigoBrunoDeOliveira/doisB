import { Component } from '@angular/core';
import { Swiper } from 'src/app/interfaces/swiper';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent {
  public swiper: Swiper = [
    {
      active: true,
      img: '../../../assets/images/img_01.webp',
      swiperData: {
        name: 'KATE WILLIAMS',
        office: 'Entrepreneur',
        text: 'I have worked with many companies offering design & architecture services, and out of all you were one who really stood out from the rest and did a great job.'
      }
    }, {
      active: false,
      img: '../../../assets/images/img_02.webp',
      swiperData: {
        name: 'ANN LEE',
        office: 'Freelancer',
        text: 'I was looking for top-notch creativity and quality service and I found what I needed in your team. You took all my ideas and demands into consideration and made a great project.'
      }
    }, {
      active: false,
      img: '../../../assets/images/img_03.webp',
      swiperData: {
        name: 'SAM MCMILLAN',
        office: 'Manager',
        text: 'I selected Spectrum because of their architects’ rigorous design background and education. They exceeded my expectations and did a great a job on extending and redesigning my house.'
      }
    }
  ]
}
