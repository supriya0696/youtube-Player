import { Action, Selector, State, StateContext } from '@ngxs/store'
// import { Action, Selector, State, StateContext } from '@ngxs/store';
import {YoutubeApiService} from 'src/app/services/youtube-api.service';
import {FetchYoutubeAPI ,FetchStaticJson, FetchYoutubeAPIWithPagination, GetVideosForChanelOnClickOfItem,GetCommentJsonData,PostCommentJsonData} from 'src/app/model/movies.action'
import { Injectable } from '@angular/core';
// import { Action } from 'rxjs/internal/scheduler/Action';
// @Injectable()

export class MovieStateModel{
    fetchYouTubeAPI:any[];
    fetchStaticJSON:any[];
    fetchYoutubeAPIWithPagination:any[];
    getVideosForChanelOnClickOfItem:any[];
    getCommentJsonData:any[];
    postCommentJsonData:any;
}

@Injectable()
@State<MovieStateModel> ({
    name:'listOfVideo',
    defaults:{
        fetchYouTubeAPI: [],
        fetchStaticJSON: [],
        fetchYoutubeAPIWithPagination: [],
        getVideosForChanelOnClickOfItem: [],
        getCommentJsonData: [],
        postCommentJsonData: []
    }
})

export class MovieState{
    constructor(public youtubeServices : YoutubeApiService){}
    @Selector()
    public static fetchYoutubeApiData(state:MovieStateModel){
        return console.log(state.fetchYouTubeAPI)
    }

    @Selector()
    public static fetchStaticJSON(state:MovieStateModel){
        return state.fetchStaticJSON
    }

    @Selector()
    public static fetchYoutubeAPIWithPagination(state:MovieStateModel){
        return state.fetchYoutubeAPIWithPagination
    }

    @Selector()
    public static getVideosForChanelOnClickOfItem(state:MovieStateModel){
        return state.getVideosForChanelOnClickOfItem
    }

    @Selector()
    public static getCommentJsonData(state:MovieStateModel){
        return state.getCommentJsonData
    }

    @Selector()
    public static postCommentJsonData(state:MovieStateModel){
        return state.postCommentJsonData
    }

    @Action(FetchYoutubeAPI)
    public async fecthYoutubeApiData(context : StateContext<MovieStateModel>){
        const result = await this.youtubeServices.fetchYoutubeAPI().then((res:any) => {
            debugger
            return res;
        })
       let data= await context.patchState({
            fetchYouTubeAPI:result
        })       
        console.log(data)
    }

    @Action(FetchStaticJson)
    public async FetchStaticJson(context : StateContext<MovieStateModel>){
        const result = await this.youtubeServices.fetchYoutubeAPI().then((res:any) => {
            return res.items;
        })
        context.patchState({
            fetchStaticJSON:result
        })
    }
    
}