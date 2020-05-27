import {  Store ,Select} from '@ngxs/store';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { FetchYoutubeAPI, FetchStaticJson, FetchYoutubeAPIWithPagination, GetVideosForChanelOnClickOfItem, GetCommentJsonData, PostCommentJsonData } from './movies.action';
// import { stat } from 'fs';
import { Injectable } from '@angular/core';
import { MovieState } from './movie.state';

@Injectable({
    providedIn: 'root',
  })
export class MovieStateService{
    @Select(MovieState.fetchStaticJSON) mockJson;
    constructor(public store : Store ,
                public http : HttpClient){}
    // @select()

    public fetchYoutubeAPI() :  Observable<any>{
        // this.store.dispatch(new FetchYoutubeAPI())
        return this.store.select((state) =>state.listOfVideo.fetchYoutubeAPI)
      
    }

    public fetchStaticJSON() : Observable<any>{
        this.store.dispatch(new FetchStaticJson())
        return this.store.select((state) => state.listOfVideo.fetchStaticJSON);
    }

    public fetchYoutubeAPIWithPagination(maxResult, pageNumber) : Observable<any>{
        this.store.dispatch(new FetchYoutubeAPIWithPagination(maxResult, pageNumber))
        return this.store.select((state) => state.listOfVideo.fetchYoutubeAPIWithPagination)
        return 
    }

    public getVideosForChanelOnClickOfItem(maxResult) : Observable<any>{
        this.store.dispatch(new GetVideosForChanelOnClickOfItem(maxResult))
        return this.store.select((state)=>state.listOfVideo.getVideosForChanelOnClickOfItem)

    }
    public getCommentJsonData() : Observable<any>{
        this.store.dispatch(new GetCommentJsonData())
        return this.store.select((state)=> state.listOfVideo.getCommentJsonData)
    }

    public postCommentJsonData(data) : Observable<any>{
        this.store.dispatch(new PostCommentJsonData(data))
        return this.store.select((state)=>state.listOfVideo.postCommentJsonData)

    }


}