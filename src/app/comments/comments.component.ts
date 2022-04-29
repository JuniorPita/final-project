import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input()
  public name = ''

  @Input()
  public src = ''

  @Input()
  public text = ''

  public status = 'Guest'
  public publishedDate: number = Date.now()

  ngOnInit(): void {
  }
}