import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VideosService {
  constructor(private http: HttpClient) {
  }

  private headers = {
      'Authorization': '563492ad6f91700001000001944a72a8b34f41c890bb0d5e79e6ee1e'
    }

  private get(url: string, params: any = {}) {
    return this.http.get(url, {headers: this.headers, params: params});
  }

  public getVideos(query: string = 'All') {
    return this.get('https://api.pexels.com/videos/search', {'query': query, 'per_page': 24});
  }

  public getVideoInfo(id: number) {
    return this.get('https://api.pexels.com/videos/videos/' + id);
  }

  public getPopularVideos() {
    return this.get('https://api.pexels.com/videos/popular', {'per_page': 10});
  }
}