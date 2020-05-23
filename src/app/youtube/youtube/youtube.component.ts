import { Component, OnInit, NgModule, NgZone, HostListener, ViewChild, ElementRef } from '@angular/core';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { itemClicked as _itemClicked } from 'lodash';
import { SafeUrl } from '@angular/platform-browser'
import { DomSanitizer } from "@angular/platform-browser";
import { NgxSpinnerService } from "ngx-spinner"; 
// import { listeners } from 'cluster';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})

export class YoutubeComponent implements OnInit {
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
  videoId = 'uXLwhNZoUaQ'
  iframeURL = 'https://www.youtube.com/embed/';
  trustedDashboardUrl: SafeUrl;
  videoTitle = ''
  regframed: Boolean = false;
  player: any;
  res: any
  video: string;
  YT: any
  itemclickTime: any;
  page: number = 1
  apiData: any = [];

  constructor(public youtubeServices: YoutubeApiService,
    private sanitizer: DomSanitizer,
    private ngZone: NgZone,
    private SpinnerService: NgxSpinnerService) {
    
  }


  ngOnInit() {
    this.itemclickTime = 1
    this.player = this.sanitizer.bypassSecurityTrustResourceUrl(this.iframeURL + this.videoId);
    this.videoTitle ="The Story of Human Migration: Your Life in a Tooth | Carolyn Freiwald | TEDxUniversityofMississippi"
    this.video= 'uXLwhNZoUaQ'
    this.SpinnerService.show();
    this.youtubeServices.fetchYoutubeAPI().subscribe(res => {
      this.SpinnerService.hide(); 
      this.apiData = res;
      this.loopItem = this.apiData.items
    })
    // this.SpinnerService.show(); 
    // this.res = this.youtubeServices.fetchStaticJson()
    // this.apiData = this.res;
    // this.loopItem = this.apiData.items
    // this.SpinnerService.hide(); 
    // })

  }


  startVideo(video) {
    this.player = new window['YT'].Player('player', {
      width: 680,
      height: 420,
      videoId: video,
      playerVars: {
        autoplay: 1,
        modestbranding: 1,
        controls: 1,
        disablekb: 1,
        rel: 0,
        showinfo: 0,
        fs: 0,
        playsinline: 1
      },
      events: {
        'onStateChange': (event) => this.ngZone.run(() => this.onPlayerStateChange(event)),
        // 'onStateChange' :(event)=> this.onPlayerStateChange.bind(event),
        'onError': (event) => this.ngZone.run(() => this.onPlayerError(event)),
        'onReady': (event) => this.ngZone.run(() => this.onPlayerReady(event))
      }
    })

    this.onPlayerStateChange(event);
  }

  onPlayerReady(event) {
    event.target.playVideo();
    console.log("----->" + event)
    // event.target.playVideo()
  }

  onPlayerStateChange(event) {
    console.log("nto thi", event)
    // event.target.playVideo();
    switch (event.data) {
      case window['YT'].PlayerState.UNSTARTED:
        if (this.cleanTime() == 0) {
          console.log('------>' + this.cleanTime())
        } else {
          console.log('------>' + this.cleanTime())
        }
        break;
      case window['YT'].PlayerState.PAUSED:
        if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
          console.log('------>' + this.cleanTime());
        }
        break;
      case window['YT'].PlayerState.ENDED:
        console.log('....>');
        break;
      case window['YT'].PlayerState.PLAYING:
        console.log("palting");
        break;
    }
  }

  cleanTime() {
    return Math.round(this.player.getCurrentTime())
  }


  onPlayerError(event) {
    switch (event.data) {
      case 2:
        console.log('.....' + this.video)
        break;
      case 100:
        break;
      case 101 || 150:
        break;
    }
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
    let videoId = e.id.videoId
    this.video = `${this.iframeURL}${videoId}`;
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
