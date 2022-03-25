import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';


import { environment } from 'src/environments/environment';
import { Articule, News, ArticulesByCategoryAndPage } from '../interfaces/index.interface';



const apiKey: string = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  private articulesByCategoryAndPage: ArticulesByCategoryAndPage = {};

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

    getTopHeadlineByCategory(category: string, loadMore: boolean = false): Observable<Articule[]> {

      if(loadMore) {
        return this.getArticulesByCategory(category);
      }

      if(this.articulesByCategoryAndPage[category]) {
        return of(this.articulesByCategoryAndPage[category].articule)
      }


      return this.getArticulesByCategory( category );

      // return this.http.get<News>(`https://api.thenewsapi.com/v1/news/all`, {
      //   params: {
      //     api_token: apiKey,
      //     categories: category,
      //     language: 'es'
      //   }
      // }).pipe(
      //   map(news => news.data)
      // )
    }

    private getArticulesByCategory( category: string ): Observable<Articule[]> {
      if(Object.keys(this.articulesByCategoryAndPage).includes(category)) {
        //No hace nada
      } else {
        this.articulesByCategoryAndPage[category] = {
          page: 0,
          articule: []
        }
      }

      const page = this.articulesByCategoryAndPage[category].page + 1;
      return this.http.get<News>(`https://api.thenewsapi.com/v1/news/all`, {
        params: {
          api_token: apiKey,
          categories: category,
          language: 'es',
          page: page
        }
      }).pipe(
        map(news => {
          if(news.data.length === 0) return this.articulesByCategoryAndPage[category].articule;
          this.articulesByCategoryAndPage[category] = {
            page: page,
            articule: [...this.articulesByCategoryAndPage[category].articule, ...news.data]
          }

          return this.articulesByCategoryAndPage[category].articule;
        })
      )
    }


}
