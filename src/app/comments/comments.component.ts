import {Component, OnInit} from '@angular/core';
import {COMMENT} from '../comments';
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

  public User: Comment[] = COMMENT

  ngOnInit(): void {
    console.log(this.User)
    console.log(this.name)
  }
}