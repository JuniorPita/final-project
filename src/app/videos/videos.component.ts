import {Component, OnInit} from '@angular/core';
import {VideosService} from '../videos.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.scss']
})
export class VideosComponent implements OnInit {
  public videos: any = []
  public isLoading: boolean = false
  public loadedAll: boolean = false
  public isFirstLoad: boolean = true
  private oldQuery: string = ''
  public modal: any

  constructor(private service: VideosService) {
  }

  ngDoCheck(): void {
    if (this.oldQuery !== this.service.searchQuery) {
      this.oldQuery = this.service.searchQuery;
      this.videos = [];
      this.loadedAll = false;
      this.getVideos();
    }
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
    });
  }

  public handleScroll(): void {
    window.onscroll = () => this.detectBottom();
  }

  public detectBottom(): void {
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
      if (!this.loadedAll && !this.isLoading) {
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