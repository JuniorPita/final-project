import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  constructor(private http: HttpClient) {
  }

  private headers = {
    // First Key - 563492ad6f91700001000001944a72a8b34f41c890bb0d5e79e6ee1e
    // Second Key - 563492ad6f917000010000016f07e56fdcad4a4f92efb8a2e909f1f3
      'Authorization': '563492ad6f917000010000016f07e56fdcad4a4f92efb8a2e909f1f3'
    }

  private get(url: string, params: any = {}) {
    return this.http.get(url, {headers: this.headers, params: params});
  }

  public pagPage: number = 12
  public curPage: number = 1

  public getVideos(query: string = 'All') {
    return this.get('https://api.pexels.com/videos/search',
    {
      'query': query,
      'per_page': this.pagPage,
      'page': this.curPage
    });
  }

  public searchVideos(query: string = 'All') {
    return this.get('https://api.pexels.com/videos/search', {
      'query': query
    });
  }

  public getVideoInfo(id: number) {
    return this.get('https://api.pexels.com/videos/videos/' + id);
  }

  public getPopularVideos() {
    return this.get('https://api.pexels.com/videos/popular', {'per_page': 10});
  }
}