import {Component, OnInit} from '@angular/core';
import {VideosService} from '../videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  public videos: any = []

  public isLoading = false
  public loadedAll = false
  public isFirstLoad = true

  constructor(private service: VideosService) {
  }

  public getVideos(): void {
    this.isLoading = true;

    this.service.getVideos().subscribe((data: any) => {
      if (data.videos.length) {
        this.videos.push(...data.videos);
      } else {
        this.loadedAll = true;
      }

      this.isLoading = false;
      this.isFirstLoad = false;

      // this.videos = data.videos;
    });
  }

  public handleScroll(): void {
    window.onscroll = () => this.detectBottom();
  }

  public detectBottom(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (!this.loadedAll && this.isLoading === false) {
        this.service.curPage++;
        this.getVideos();
      }
    }
  }

  ngOnInit(): void {
    this.getVideos();
    this.handleScroll();
  }

}
