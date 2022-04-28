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
  private oldQuery = ''
  public modal: any

  constructor(private service: VideosService) {
  }

  ngDoCheck() {
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

      // if (this.videos.length == 0) {
      //   this.modal.classList.remove('hidden');
      // } else {
      //   this.modal.classList.add('hidden');
      // }
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