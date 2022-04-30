import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.scss']
})
export class CommentsComponent implements OnInit {
  @Input()
  public name: string = ''

  @Input()
  public src: string = ''

  @Input()
  public text: string = ''

  public status: string = 'Guest'
  public publishedDate: number = Date.now()

  ngOnInit(): void {
  }
}