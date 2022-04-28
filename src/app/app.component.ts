import {Component, Input} from '@angular/core';
import {VideosService} from './videos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public videos: any = []

  @Input()
  public search: any = ''

  constructor(private service: VideosService) {
  }
}
