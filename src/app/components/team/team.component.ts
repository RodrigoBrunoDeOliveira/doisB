import { Component } from '@angular/core';
import { ScreenService } from 'src/app/services/screen.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent {
  public screen: string;
  
  constructor(
    private screenService: ScreenService
  ) {
    this.screen = this.screenService.getDevice();
  }
}
