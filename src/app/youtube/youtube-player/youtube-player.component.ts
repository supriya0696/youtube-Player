import { Component, OnInit, NgZone, ViewChild, ElementRef } from '@angular/core';
import { YoutubeApiService } from 'src/app/services/youtube-api.service';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import { NgxSpinnerService } from 'ngx-spinner';
import { MovieStateService } from 'src/app/model/movie-state.service';

@Component({
  selector: 'app-youtube-player',
  templateUrl: './youtube-player.component.html',
  styleUrls: ['./youtube-player.component.scss']
})
export class YoutubePlayerComponent implements OnInit {
 // showMore
 @ViewChild('itemHolder') itemHolder: ElementRef;
 @ViewChild('showMore') showMore: ElementRef;
 // @HostListener('window:scroll', ['$event']) // for window scroll events


 onScroll(event) {
   // let pos = (event.target.scrollTop || document.body.scrollTop) + event.target.offsetHeight;
   // let max = event.target.scrollHeight;
   // let data_per_page = this.apiData.pageInfo.resultsPerPage
   // let totalItems = this.apiData.pageInfo.totalResults
 
   // if (pos===max) {
     if(event.currentTarget.scrollY === 3502){
       this.page += 1
     this.youtubeServices.fetchYoutubeAPIWithPagination(20, this.page).subscribe((res:any) =>{
       this.apiData = res;
       this.loopItem = this.apiData.items
     this.itemHolder.nativeElement.style.height = "9000px";
     // this.res = this.youtubeServices.fetchStaticJson()
     // this.apiData = this.res.items;
     // this.loopItem = this.apiData
   
     //  let pageCount = totalItems/data_per_page;
     //  this.page +=1;
     })
   }
 }
 loopItem: any = [];
 list: any = [];
 videoId = ''
 iframeURL = 'https://www.youtube.com/embed/';
 trustedDashboardUrl: SafeUrl;
 videoTitle = ''
 regframed: Boolean = false;
 player: any;
 res: any
 video: string;
 page: number = 1;
 isSearchScreen:boolean=false;
 apiData: any ;
  constructor(public youtubeServices: YoutubeApiService,
    private sanitizer: DomSanitizer,
    private ngZone: NgZone,
    private SpinnerService: NgxSpinnerService,
    private movieState:MovieStateService) { }

  ngOnInit(): void {
    this.videoId = 'gNCPrTGU6GI'
    // this.itemclickTime = 1
    this.player = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeURL + this.videoId);
    this.videoTitle ="The Story of Human Migration: Your Life in a Tooth | Carolyn Freiwald | TEDxUniversityofMississippi"
    this.video= 'uXLwhNZoUaQ'
    this.SpinnerService.show();
    // console.log(this.fetchYouTubeAPI)
    // this.movieState.fetchYoutubeAPI().subscribe(res => {
    //   this.SpinnerService.hide(); 
    //   console.log(res)
    //   this.apiData = res;
    //   this.loopItem = this.apiData
    // })
    // this.SpinnerService.show(); 
    this.res = this.youtubeServices.fetchStaticJson()
    this.apiData = this.res;
    this.loopItem = this.apiData.items
    this.SpinnerService.hide(); 
    // })
  }

   onBtnClick(playerUrl) {
    console.log(playerUrl)
    this.video = 'QD0hhjEnHb0'
    this.youtubeServices.getVideosForChanelOnClickOfItem(10).subscribe((res: any) => {
      this.apiData = res;
      this.loopItem = this.apiData.items
    })

  }

  itemClicked(e) {
    debugger
    this.videoTitle = e.snippet.title;
    this.videoId = e.id.videoId
    this.video = `${this.iframeURL}${this.videoId}`;
    console.log(this.video)
    this.SpinnerService.show();
    this.player = this.sanitizer.bypassSecurityTrustResourceUrl(this.video)
    // this.res = this.youtubeServices.fetchStaticJson()
    // this.apiData = this.res.items;
    this.loopItem = this.apiData
    this.SpinnerService.hide();
    this.youtubeServices.getVideosForChanelOnClickOfItem(20).subscribe((res:any) =>{
      this.apiData = res;
      this.loopItem = this.apiData.items
    })
  }

  showMoreContent(){
    // this.itemHolder.nativeElement.style.height = "9000px";
    this.showMore.nativeElement.style.top += "900px";
    this.youtubeServices.getVideosForChanelOnClickOfItem(20).subscribe((res:any) =>{
      this.apiData = res;
      this.loopItem = this.apiData.items
    })
  }

}
