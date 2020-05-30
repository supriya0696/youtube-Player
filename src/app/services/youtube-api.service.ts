import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError ,tap, retryWhen} from 'rxjs/operators';
import { throwError, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class YoutubeApiService {
  apiKey: string='AIzaSyCki2sTYFJNQ-5WyhRN6sBgS4Aw6oIflNQ';
  channelId='UCq-Fj5jknLsUf-MWSy4_brA'
  constructor(private http : HttpClient) { }

  async fetchYoutubeAPI(){
    const url = ' https://www.googleapis.com/youtube/v3/search?key=AIzaSyCki2sTYFJNQ-5WyhRN6sBgS4Aw6oIflNQ&channelId=UCq-Fj5jknLsUf-MWSy4_brA&part=snippet,id&order=date&maxResults=20';
    return await this.http.get(url).toPromise().then(res=>console.log(res));
    // .pipe(map(res =>{
    //   console.log(res);
    //   return res;
    // }))
    // https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&order=viewCount&q=salman&maxResults=3&key=AIzaSyCki2sTYFJNQ-5WyhRN6sBgS4Aw6oIflNQ//search api
    // https://www.googleapis.com/youtube/v3/search?key=AIzaSyBgNcm2_Qj_-CMliE-7PPTvEjsDrZoeokQ&channelId=UCq-Fj5jknLsUf-MWSy4_brA&part=snippet,id&order=date&maxResults=40
//     https://www.googleapis.com/youtube/v3/search?key=AIzaSyBgNcm2_Qj_-CMliE-7PPTvEjsDrZoeokQ&channelId=UCsT0YIqwnpJCM-mx7-gSA4Q&part=snippet,id&order=date&maxResults=20
//     https://www.googleapis.com/youtube/v3/videos?part=snippet,id&order=date&chart=mostPopular&regionCode=IN&maxResults=25&key=AIzaSyBgNcm2_Qj_-CMliE-7PPTvEjsDrZoeokQ
  }

  fetchStaticJson(){
    let data = require('../../assets/mock-json/api-data.json');
    return data
  }

  fetchYoutubeAPIWithPagination(maxResults , pageNumber){
    return this.http.get('https://www.googleapis.com/youtube/v3/search?key=AIzaSyCki2sTYFJNQ-5WyhRN6sBgS4Aw6oIflNQ&channelId=UCq-Fj5jknLsUf-MWSy4_brA&part=snippet,id&order=date&maxResults=' + maxResults + '&pageNumber=' + pageNumber)
    .pipe(map(res =>{
      console.log(res);
      return res;
    }))
  }

  getVideosForChanelOnClickOfItem(maxResults): Observable<Object> {
    let url = 'https://www.googleapis.com/youtube/v3/search?key=' + this.apiKey + '&channelId=' +this.channelId + '&order=date&part=snippet &type=video,id&maxResults=' + maxResults
    return this.http.get(url)
      .pipe(map((res) => {
        return res;
      }))
  }

  public getCommentJsonData(videoID) {
    let url ="https://www.googleapis.com/youtube/v3/commentThreads?key=AIzaSyCki2sTYFJNQ-5WyhRN6sBgS4Aw6oIflNQ&textFormat=plainText&part=snippet&maxResults=50&videoId="+videoID
    // const fullUrl=`${url}${videoID}`
    return this.http.get(url)
    .pipe(map(res=>{
    return res;
        }))
    // return require('../../assets/mock-json/comment-api.json');
  }

  public postCommentJsonData(data) {
    // let commentData = require('../../assets/mock-json/comment-api.json');
    // return this.http.post('../../assets/mock-json/comment-api.json',data).subscribe(res =>{
    //   console.log("posted succesfully ")
    // })
    // return commentData.push(data);

  }
   public searchApi(searchData){
     let url='https://www.googleapis.com/youtube/v3/search?type=video&part=snippet&order=viewCount&q='+searchData+'&maxResults=3&key=AIzaSyCki2sTYFJNQ-5WyhRN6sBgS4Aw6oIflNQ'
     return this.http.get(url).pipe(map(res=>{
       console.log(res)
       return res;
     })
     )
   }
   public staticSearchApi(searchData){
    let data = require('../../assets/mock-json/search.json');
    return data
  }
}
