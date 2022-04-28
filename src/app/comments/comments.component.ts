import {Component, OnInit} from '@angular/core';
import {Comment} from '../domain/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor() {}

  public name = ''
  public status = 'Guest'
  public publishedDate: number = Date.now()
  public text = ''

  ngOnInit(): void {
  }
}