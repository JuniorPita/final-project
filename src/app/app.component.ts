import {Component} from '@angular/core';
import {VideosService} from './videos.service';
import {CommentsService} from './comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public videos: any = []

  public search: any = ''

  public bla() {
    if (this.search !== '') {
      this.service.searchQuery = this.search;
    } else {
      this.service.searchQuery = 'All';
    }
  }

  constructor(private service: VideosService, private comments: CommentsService) {
    this.comments.init();
  }
}
