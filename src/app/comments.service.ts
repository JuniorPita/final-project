import {Injectable} from '@angular/core';
import {BehaviorSubject, map, Observable} from 'rxjs';
import {Comment} from './domain/Comment';

@Injectable({
  providedIn: 'root'
})
export class CommentsService {

  private readonly _commentList$: BehaviorSubject<Comment[]> = new BehaviorSubject([] as Comment[])
  private comments: Comment[] = []

  commentList$: Observable<Comment[]> = this._commentList$.asObservable();

  constructor() {}

  public addComment(com: Comment) {
    this.comments.push(com);
    localStorage.setItem('comms', JSON.stringify(this.comments));
    this._commentList$.next(this.comments);
  }

  public getComment(id: number) {
    return this.commentList$.pipe(map(items => items.filter(item => item.videoID === id)));
  }

  public init() {
    const value = JSON.parse(localStorage.getItem('comms') || '') || [];

    this.comments = value;
    this._commentList$.next(this.comments);
  }
}
