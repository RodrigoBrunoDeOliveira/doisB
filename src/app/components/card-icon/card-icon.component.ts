import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-icon',
  templateUrl: './card-icon.component.html',
  styleUrls: ['./card-icon.component.scss']
})
export class CardIconComponent {
  @Input() icon: string;
  @Input() text: string;
  @Input() title: string;
}
