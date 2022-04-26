import {Component, OnInit} from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss']
})
export class VideoPageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    console.log(this.form.value)
  }

  public form = new FormGroup({
    name: new FormControl('Your Name'),
    text: new FormControl('Comment Text')
  })
}