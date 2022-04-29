import {Component, Input, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';
import {VideosService} from '../videos.service';
import {ActivatedRoute} from '@angular/router';
import {__values} from 'tslib';
import {CommentsService} from '../comments.service';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {
  public video: any
  
  public status: string = ''
  public publishedDate: any
  public videoID: number = 0

  constructor(private service: VideosService, private route: ActivatedRoute, private commentService: CommentsService) {
    this.route.params.subscribe(params => {
      this.service.getVideoInfo(params['id']).subscribe((data: any) => {
        this.video = data;
      });
    });
  }

  public commentList: any = this.commentService.commentList$

  ngOnInit(): void {
  }

  public get name(): string {
    return this.form.get('name')?.value;
  }

  public get text(): string {
    return this.form.get('text')?.value;
  }

  public get src(): string {
    return this.form.get('src')?.value;
  }

  public sendForm() {
    this.commentService.addComment({
      src: this.src ?? 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
      name: this.name ?? 'Ivan',
      status: 'Guest',
      publishedDate: Date.now(),
      text: this.text ?? '',
      videoID: this.video.id
    });
  }

  public form = new FormGroup({
    name: new FormControl('Your Name'),
    text: new FormControl('Comment Text')
  })
}