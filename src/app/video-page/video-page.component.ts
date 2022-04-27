import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {VideosService} from '../videos.service';
import {ActivatedRoute} from '@angular/router';
import { __values } from 'tslib';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {
  public video: any

  constructor(private service: VideosService, private route: ActivatedRoute) {
    this.route.params.subscribe(params => {
      this.service.getVideoInfo(params['id']).subscribe((data: any) => {
        this.video = data;
      });
    });
  }

  ngOnInit(): void {
    // console.log(this.form.value)
  }

  public form = new FormGroup({
    name: new FormControl('Your Name'),
    text: new FormControl('Comment Text')
  })
}