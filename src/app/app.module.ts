import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {VideoCardComponent} from './video-card/video-card.component';
import {VideoPageComponent} from './video-page/video-page.component';
import {HomeComponent} from './home/home.component';
import {CommentsComponent} from './comments/comments.component';
import {VideosComponent} from './videos/videos.component';
import {AppRoutingModule} from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgsRevealModule} from 'ngx-scrollreveal';

@NgModule({
  declarations: [
    AppComponent,
    VideoCardComponent,
    VideoPageComponent,
    HomeComponent,
    CommentsComponent,
    VideosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgsRevealModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}