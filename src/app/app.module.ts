import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainHeaderComponent } from './main-header/main-header.component';
import { IntroductionComponent } from './introduction/introduction.component';

@NgModule({
  declarations: [
    AppComponent,
    MainHeaderComponent,
    IntroductionComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
