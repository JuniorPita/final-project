import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {

  constructor() {}

  @Input()
  public name = ''

  @Input()
  public src = ''
  
  public status = 'Guest'
  public publishedDate: number = Date.now()

  @Input()
  public text = ''

  ngOnInit(): void {
  }
}