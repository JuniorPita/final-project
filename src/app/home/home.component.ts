import {Component, OnInit} from '@angular/core';
import {VideosService} from '../videos.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public popularVideos? = []

  constructor(private service: VideosService) {
    this.service.getPopularVideos().subscribe((data: any) => {
      this.popularVideos = data.videos;
    });
  }

  ngOnInit(): void {
  }
}