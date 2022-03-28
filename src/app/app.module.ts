import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { MatIconModule } from '@angular/material/icon';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppComponent } from './app.component';
import { TweetsComponent } from './components/main-feed/tweets/tweets.component';
import { TweetComponent } from './components/main-feed/tweet/tweet.component';
import { ColorThemeToggleComponent } from './components/side-bar/color-theme-toggle/color-theme-toggle.component';
import { SideBarComponent } from './components/side-bar/side-bar/side-bar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { WhatsHappeningComponent } from './components/whats-happening/whats-happening/whats-happening.component';
import { TweetComposerComponent } from './components/tweet-composer/tweet-composer/tweet-composer.component';
import { PromotionComponent } from './components/whats-happening/promotion/promotion.component';
import { TrendingComponent } from './components/whats-happening/trending/trending.component';
import { ArticleComponent } from './components/whats-happening/article/article.component';
import { WhoToFollowComponent } from './components/who-to-follow/who-to-follow.component';
import { HttpClientModule } from '@angular/common/http';
import { ProfileComponent } from './components/profile/profile.component';

@NgModule({
  declarations: [AppComponent, TweetsComponent, TweetComponent, ColorThemeToggleComponent, SideBarComponent, WhatsHappeningComponent, TweetComposerComponent, PromotionComponent, TrendingComponent, ArticleComponent, WhoToFollowComponent, ProfileComponent],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule, MatIconModule, FontAwesomeModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
