import { Component } from '@angular/core';
import{ActivatedRoute}from'@angular/router';
import{MovieService}from'../movie-service.service';
@Component({
  selector: 'app-tvdetails',
  templateUrl: './tvdetails.component.html',
  styleUrls: ['./tvdetails.component.scss']
})
export class TvdetailsComponent {
  id:any;
  tvDetails:any;
  topTen:any=[];
  imgPrefix="https://image.tmdb.org/t/p/w500/";
  isLoading:boolean=false;
  constructor(public _ActivatedRoute:ActivatedRoute,public _MovieService:MovieService){
    this.id=this._ActivatedRoute.snapshot.paramMap.get('tid');
    this._MovieService.getTvDetails(this.id).subscribe((data)=>{
      this.tvDetails=data;
      this.isLoading=true
    });

    this._MovieService.getTrendingTv().subscribe((tv)=>{
      for(let i=0;i<10;i++)
      {
        this.topTen.push(tv.results[i])
      }
    });
  }

}
