import { Component, OnInit, Input, OnChanges, SimpleChange, SimpleChanges, Output } from '@angular/core';
import { YoutubeApiService } from 'src/app/services/youtube-api.service'
import { shareReplay } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';
import { EventEmitter } from 'protractor';
@Component({
  selector: 'app-comment-section',
  templateUrl: './comment-section.component.html',
  styleUrls: ['./comment-section.component.scss']
})
export class CommentSectionComponent implements OnInit,OnChanges {
  commentRes:any=[]
  @Input() apiData = [];
  @Input() videoId;
  data:any;
  // @Output()   itemClicked = new EventEmitter();
  // videoId = 'uXLwhNZoUaQ';

  constructor(public youtubeApiService :YoutubeApiService,
              public SpinnerService:NgxSpinnerService) { }

  ngOnInit(): void {
    console.log(this.apiData)
    this.SpinnerService.show();
    this.youtubeApiService.getCommentJsonData(this.videoId).subscribe((res:any)=>{
      this.SpinnerService.hide();
      debugger
      this.commentRes=res.items
      console.log(this.commentRes)
    });
  }

  ngOnChanges(changes: {[propKey: string]: SimpleChange}){
    debugger
    let log: string[] = [];
    for (let propName in changes) {
      let changedProp = changes[propName];
      this.videoId = (changedProp.currentValue);   
      this.youtubeApiService.getCommentJsonData(this.videoId).subscribe((res:any)=>{
        this.SpinnerService.hide();
        this.commentRes=res.items
        console.log(this.commentRes)
      });
    }
  }

}
