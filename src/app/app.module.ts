import { CardsComponent } from './components/cards/cards.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { SwiperComponent } from './components/swiper/swiper.component';
import { CardIconComponent } from './components/card-icon/card-icon.component';
import { LeedPanelComponent } from './components/leed-panel/leed-panel.component';
import { PanelComponent } from './components/panel/panel.component';
import { IntroductionComponent } from './components/introduction/introduction.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import { StepsComponent } from './components/steps/steps.component';
import { TeamComponent } from './components/team/team.component';
import { AwardsComponent } from './components/awards/awards.component';
import { CardsResumeComponent } from './components/cards-resume/cards-resume.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CommentsComponent } from './components/comments/comments.component';
import { SwiperProfileComponent } from './components/swiper-profile/swiper-profile.component';
import { MainFooterComponent } from './components/main-footer/main-footer.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgxMaskModule } from 'ngx-mask';
import { MainMenuComponent } from './components/main-menu/main-menu.component'

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
    PanelComponent,
    TeamComponent,
    AwardsComponent,
    CardsResumeComponent,
    ProjectsComponent,
    CommentsComponent,
    SwiperProfileComponent,
    MainFooterComponent,
    MainMenuComponent
  ],
  exports: [],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    NgxMaskModule.forRoot()
  ],
  providers: [SwiperComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
