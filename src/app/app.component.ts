import {Component} from '@angular/core';
import {VideosService} from './videos.service';
import {CommentsService} from './comments.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public search: string = ''

  public toggleMenu(): void {
    const list = document.querySelector('.nav__list');

    list?.classList.toggle('toggle');
  }

  public removeMenu(): void {
    const list = document.querySelector('.nav__list');

    list?.classList.remove('toggle');
  }

  public searching(): void {
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
