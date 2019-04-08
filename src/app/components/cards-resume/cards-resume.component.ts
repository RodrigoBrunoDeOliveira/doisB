import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cards-resume',
  templateUrl: './cards-resume.component.html',
  styleUrls: ['./cards-resume.component.scss']
})
export class CardsResumeComponent {
  @Input() number: number;
  @Input() text: string;
  @Input() title: string;
}
