import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(public _HttpClient:HttpClient) { }

  getTrendingMovies():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/movie/week?api_key=829de89973287f7712797978253bf563')
  }

  getTrendingTv():Observable<any>
  {
    return this._HttpClient.get('https://api.themoviedb.org/3/trending/tv/week?api_key=829de89973287f7712797978253bf563')
  }

  getMovieDetails(moveID:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/movie/${moveID}?api_key=829de89973287f7712797978253bf563&language=en-US`)
  }

  getTvDetails(TvID:number):Observable<any>
  {
    return this._HttpClient.get(`https://api.themoviedb.org/3/tv/${TvID}?api_key=829de89973287f7712797978253bf563&language=en-US`)
  }
}
