import {Component, OnInit} from '@angular/core';
import {Comment} from '../domain/Comment';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor() {}

  public publishedDate: number = Date.now()

  public User: Comment = {
    name: 'Lesha',
    status: 'Guest',
    date: this.publishedDate,
    text: 'Some Comment'
  }

  ngOnInit(): void {
  }
}