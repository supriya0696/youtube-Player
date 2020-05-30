import { Component, OnInit, NgModule, NgZone, HostListener, ViewChild, ElementRef } from '@angular/core';
import { YoutubeApiService } from '../../services/youtube-api.service';
import { itemClicked as _itemClicked } from 'lodash';
import { SafeUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-youtube',
  templateUrl: './youtube.component.html',
  styleUrls: ['./youtube.component.scss']
})

export class YoutubeComponent implements OnInit {
  // showMore
 

  constructor(public youtubeServices: YoutubeApiService,) {
    
  }
  // @Select(MovieState.fetchYoutubeApiData) fetchYouTubeAPI: Observable<any>;


  ngOnInit() {  }
 
 

}
