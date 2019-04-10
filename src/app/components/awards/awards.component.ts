import { Component } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-awards',
  templateUrl: './awards.component.html',
  styleUrls: ['./awards.component.scss']
})
export class AwardsComponent {
  public screen: string;
  
  constructor(
    private screenService: ScreenService
  ) {
    this.screen = this.screenService.getDevice();
  }
}
