import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {VideoCardComponent} from './video-card/video-card.component';
import {VideoPageComponent} from './video-page/video-page.component';
import {HeaderComponent} from './header/header.component';
import {CommentsComponent} from './comments/comments.component';
import {VideosComponent} from './videos/videos.component';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    VideoCardComponent,
    VideoPageComponent,
    HeaderComponent,
    CommentsComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}