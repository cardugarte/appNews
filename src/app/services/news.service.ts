import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';



const apiKey: string = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {


  constructor(
    private http: HttpClient
  ) { }


    getNewsTop() {
      return this.http.get(`https://api.thenewsapi.com/v1/news/top`, {
        params: {
          api_token: apiKey
        }
      });
    }


}
