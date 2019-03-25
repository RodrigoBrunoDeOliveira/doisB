import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { CardsComponent } from './cards/cards.component';
import { CardIconComponent } from './components/card-icon/card-icon.component';
import { LeedPanelComponent } from './components/leed-panel/leed-panel.component';
import { StepsComponent } from './steps/steps.component';
import { PanelComponent } from './components/panel/panel.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    IntroductionComponent,
    SwiperComponent,
    CardsComponent,
    CardIconComponent,
    LeedPanelComponent,
    StepsComponent,
    PanelComponent
  ],
  exports: [SwiperComponent],
  imports: [
    BrowserModule
  ],
  providers: [SwiperComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
