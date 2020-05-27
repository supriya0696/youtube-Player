import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { CommentModelData } from 'src/app/youtube/self-comment/commentData-model';
import { YoutubeApiService } from 'src/app/services/youtube-api.service'
let commentFile = require('src/assets/mock-json/comment-api.json');

@Component({
  selector: 'app-self-comment',
  templateUrl: './self-comment.component.html',
  styleUrls: ['./self-comment.component.scss']
})
export class SelfCommentComponent implements OnInit , OnChanges {
  commentForm: FormGroup;
  // commentData= commentApi
  isHidden: boolean = true;
  comment:[]
  isDisable:boolean=false;
  commentArea:'';
  constructor(  private formBuilder : FormBuilder,
                private youtubeApiService: YoutubeApiService) { }


  ngOnChanges(changes: SimpleChanges): void {
    console.error(changes)
    this.isDisable=true
    this. commentForm.valueChanges 
            .subscribe((changes: any) => {
                 this.isDisable = this. commentForm.valid;
            });
  }

  ngOnInit(): void {
    this.commentForm = this.formBuilder.group({
            comment: ['',Validators.required ]
          });
      
    // this.commentForm = new FormGroup({
    //   comment: new FormControl({value :'',disabled : true},Validators.required )
    // })
  }
  onCancel(){
    this.isHidden=true;
  }

  onComment(commentData ){
    // this.comment = commentData.controls.comment.value;
    // if(this.comment.length>0){
    //   this.isDisable= false;
    // }
     let cmnt ={
      "authorDisplayName":"supriya",
      "authorProfileImageUrl":"https://yt3.ggpht.com/a/AATXAJznot1ObyvO4mAEFnFMZJIe28lrsHBEX95okw=s48-c-k-c0xffffffff-no-rj-mo",
      "authorChannelUrl":"http://www.youtube.com/channel/UC_x0pNQGEE0Zu5rafI-164A",
      "authorChannelId":{"value":"UC_x0pNQGEE0Zu5rafI-164A"},
      "videoId":"ZIJ9jkXl7R8",
      "textDisplay":this.comment,
      "textOriginal":this.comment,
      "canRate":true,
      "viewerRating":"none",
      "likeCount":0,
      "publishedAt":"2020-04-24T10:29:41.000Z",
      "updatedAt":"2020-04-24T10:29:41.000Z"
    }
    let data=this.youtubeApiService.postCommentJsonData(cmnt)
    console.log(data)

  }

  callHiddenDiv(comment){
    this.isHidden = false
    if(comment.controls.comment.value.length > 0){
      // this.isDisable=this.commentForm.controls.comment.enabled
  }
}

}
