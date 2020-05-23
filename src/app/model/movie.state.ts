// import { Action, Selector, State, StateContext } from '@ngxs/store';
import {State, StateContext, Selector, Action} from '@ngrx/store';
import {YoutubeApiService} from 'src/app/services/youtube-api.service';
import {FetchYoutubeAPI ,FetchStaticJson, FetchYoutubeAPIWithPagination, GetVideosForChanelOnClickOfItem,GetCommentJsonData,PostCommentJsonData} from 'src/app/model/movies.action'
export class MovieStateModel{
    fetchYouTubeAPI:any[];
    fetchStaticJSON:any[];
    fetchYoutubeAPIWithPagination:any[];
    getVideosForChanelOnClickOfItem:any[];
    getCommentJsonData:any[];
    postCommentJsonData:any;
}

@State<MovieStateModel>({
    name:'movieList',
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
    public static fecthYoutubeApiData(state:MovieStateModel){
        return state.fetchYouTubeAPI
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
        const result = await this.youtubeServices.fetchYoutubeAPI().subscribe((res:any) => {
            return res.items;
        })
        context.patchState({
            fetchYouTubeAPI:result,
        })
    }

    @Action(FetchYoutubeAPI)
    public async FetchStaticJson(context : StateContext<MovieStateModel>){
        const result = await this.youtubeServices.fetchYoutubeAPI().subscribe((res:any) => {
            return res.items;
        })
        context.patchState({
            fetchStaticJSON:result,
        })
    }
    
}