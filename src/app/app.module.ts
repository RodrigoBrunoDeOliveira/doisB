import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { IntroductionComponent } from './introduction/introduction.component';
import { SwiperComponent } from './components/swiper/swiper.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    IntroductionComponent,
    SwiperComponent
  ],
  exports: [SwiperComponent],
  imports: [
    BrowserModule
  ],
  providers: [SwiperComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
