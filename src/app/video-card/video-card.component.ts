import {Component, Input, OnInit} from '@angular/core';
import {Video} from '../domain/Videos';

@Component({
  selector: 'app-video-card',
  templateUrl: './video-card.component.html',
  styleUrls: ['./video-card.component.scss']
})
export class VideoCardComponent implements OnInit {

  constructor() {}

  @Input() video: any = {};

  ngOnInit(): void {
  }

}