import {Component, OnInit} from '@angular/core';
import {Video} from '../domain/Videos';
import {VideosService} from '../videos.service';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {

  constructor(private videoService: VideosService) {}

  getVideo(): void {
    this.videoService.getVideo().subscribe((videos) => {this.videos = videos})
  }

  public videos?: Video[]

  ngOnInit(): void {
    this.getVideo()
    console.log(this.getVideo())
  }

}