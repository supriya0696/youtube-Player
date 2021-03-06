import { Component, OnInit } from '@angular/core';
import {SearchPipe} from 'src/app/youtube/search.pipe';
import {YoutubeApiService} from 'src/app/services/youtube-api.service'
import { NgxSpinnerService } from "ngx-spinner"; 
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  searchVideo: string = '';
  searchVideoData:any=[];
  searchData:any;
  navigateToSearchingListPage:boolean=false;
  constructor(public searchPipe : SearchPipe,
              public youtubeApiService:YoutubeApiService,
              public ngxSpinnerService:NgxSpinnerService) { }

  ngOnInit(): void {
  }

  clearField(){
    this.searchVideo=''
  }
  searchVideoByName(searchData){
    console.log(searchData)
    this.searchData=searchData
    this.ngxSpinnerService.show()
    this.navigateToSearchingListPage=true;
    this.youtubeApiService.searchApi(searchData).subscribe(res=>{
      this.ngxSpinnerService.hide();
      console.log(res) 
      this.searchVideoData=res;      
    })
    // let data =this.youtubeApiService.staticSearchApi(searchData)
    //   this.ngxSpinnerService.hide();
    //   console.log(data) 
    //   this.searchVideoData=data;      
    // })

  }

}
