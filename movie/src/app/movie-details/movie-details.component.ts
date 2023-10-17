import { Component } from '@angular/core';
import{ActivatedRoute}from'@angular/router';
import{MovieService}from'../movie-service.service';
@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent {

    id:any;
    movieDetails:any;
    topTen:any=[];
    imgPrefix="https://image.tmdb.org/t/p/w500/";
    isLoading:boolean=false;
  constructor(public _ActivatedRoute:ActivatedRoute,public _MovieService:MovieService){

    this.id=_ActivatedRoute.snapshot.paramMap.get('mid');

    this._MovieService.getMovieDetails(this.id).subscribe((data)=>{
      this.movieDetails=data;
      this.isLoading=true;
    });


    this._MovieService.getTrendingMovies().subscribe((movies)=>{
      for(let i=0;i<10;i++)
      {
        this.topTen.push(movies.results[i])
      }
    });
  }
}
