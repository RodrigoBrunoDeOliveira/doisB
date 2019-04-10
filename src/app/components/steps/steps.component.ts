import { Component } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss']
})
export class StepsComponent {
  public json: any = {
    "costumer": {
      "text": [
        "When the project gets to its final stage, our quality control team conducts the final check of the building to make sure everything has been carried out the proper way.",
        "Our employees will also make sure that all interior elements & fixtures are correctly installed during this final step. After everything is completed, we invite our client to assess the final result and experience the quality performance of our project."
      ],
      "title": "completing a project"
    },
    "development": {
      "text": [
        "The next step of our cooperation lies in developing the concept of your future home. It helps us define every single factor that makes the construction process of your home successful.",
        "Our team of designers and architects has to plan every single step of the project to make sure that the final result will meet not only your requirements but also international construction and safety standards. This is when monitoring & control begin."
      ],
      "title": "working on the concept"
    },
    "finishing": {
      "text": [
        "When the project gets to its final stage, our quality control team conducts the final check of the building to make sure everything has been carried out the proper way.",
        "Our employees will also make sure that all interior elements & fixtures are correctly installed during this final step. After everything is completed, we invite our client to assess the final result and experience the quality performance of our project."
      ],
      "title": "completing a project"
    },
    "working": {
      "text": [
        "There’s no doubt that the most important and responsible part of building a home is its construction process. As we work with reliable contractors, a great result is guaranteed.",
        "This stage is one of the most complex ones as it includes a variety of tasks that must be controlled - from preparing the construction site to installing insulation and completing drywall as well as working on exterior."
      ],
      "title": "building your home"
    }
  };  

  public options: any = [
    'acquaintance with the customer',
    'project concept development',
    'working on interior and exterior',
    'finishing touches for your future home'
  ];

  public switchValues: number = 0;
  public screen: string;

  constructor(
    private screenService: ScreenService
  ) {
    this.screen = this.screenService.getDevice();
  }
}
