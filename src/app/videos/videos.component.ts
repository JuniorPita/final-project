import {Component, OnInit} from '@angular/core';
import {VideosService} from '../videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  public videos: any

  constructor(private service: VideosService) {
    this.service.getVideos().subscribe((data: any) => {
      this.videos = data.videos;
      console.log(this.videos)
    });
  }

  ngOnInit(): void {
  }

}
