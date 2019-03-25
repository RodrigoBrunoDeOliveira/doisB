import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LeedPanelComponent } from './leed-panel.component';

describe('LeedPanelComponent', () => {
  let component: LeedPanelComponent;
  let fixture: ComponentFixture<LeedPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LeedPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LeedPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
