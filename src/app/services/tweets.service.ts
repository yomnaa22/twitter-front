import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tweet } from '../models/tweet'
import { environment } from 'src/environments/environment';

export interface data {
  fname: string;
    username: string;
    id:number;
    user_id: number;
    description: string;
    tag: string;
    likes: number;
    retweets:number;
    img:string;
      
}
@Injectable({
  providedIn: 'root'
})

export class TweetsService {

  constructor(private httpClient: HttpClient) { }
  getAlltweets(): Observable<Tweet[]> {

    return this.httpClient.get<Tweet[]>(`${environment.baseUrl}tweets`);
}
}
