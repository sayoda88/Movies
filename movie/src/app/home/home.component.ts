import { Component, OnInit } from '@angular/core';
import{MovieService}from'../movie-service.service'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
trendingMovies :any=[];
trendingTv:any=[];
imgPrefix="https://image.tmdb.org/t/p/w500/";
  constructor(private movieService:MovieService){
    this.movieService.getTrendingMovies().subscribe({
      next:(data)=>{
        this.trendingMovies=data.results;
      },
      error:(err)=>{
        console.log(err);
      }
    }
    );

    this.movieService.getTrendingTv().subscribe({
      next:(data)=>{
        this.trendingTv=data.results;
      },
      error:(err)=>{
        console.log(err);
      }
    }
    );
  }
  
  
  ngOnInit(): void {
    
  }

}
