import {Injectable} from '@angular/core';

import {Observable, of} from 'rxjs';
import {Video} from './domain/Videos';
import {videos} from './videos';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor() {}

  getVideo():Observable<Video[]> {
    return of(videos)
  }
}