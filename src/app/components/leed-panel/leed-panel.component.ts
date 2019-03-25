import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-leed-panel',
  templateUrl: './leed-panel.component.html',
  styleUrls: ['./leed-panel.component.scss']
})
export class LeedPanelComponent {
  @Input() message: string;
  @Input() name: string;
  @Input() title: string;
}
