import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


import { environment } from 'src/environments/environment';
import { Articule, News } from '../interfaces/index.interface';



const apiKey: string = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(
    private http: HttpClient
  ) { }


    getNewsTop(): Observable<Articule[]> {
      return this.http.get<News>(`https://api.thenewsapi.com/v1/news/top`, {
        params: {
          api_token: apiKey,
          locale: 'ar'
        }
      }).pipe(
        map(news => news.data)
      );
    }

    getTopHeadlineByCategory(category: string): Observable<Articule[]> {
      return this.http.get<News>(`https://api.thenewsapi.com/v1/news/top`, {
        params: {
          api_token: apiKey,
          locale: 'ar',
          categories: category
        }
      }).pipe(
        map(news => news.data)
      )
    }


}
