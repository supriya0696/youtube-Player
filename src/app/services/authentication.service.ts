import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, catchError ,tap} from 'rxjs/operators';
import { loginModel } from 'src/app/login-component/login-model';
import { Subject, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isFetching=false;
  error = new Subject<any>();
  loadedPost:loginModel[]=[]
  constructor(private http : HttpClient) { }

  createAndStorePost(id:number,username:string , password:string) {
    const postData: loginModel = {id:id,username:username , password:password};
    const ff = JSON.stringify(postData)
    return this.http.post<any>('https://first-86fdf.firebaseio.com/posts.json',ff)
    .subscribe(responseData =>{
      console.log(responseData);
    },error =>{
      this.error.next(error.error.error);
    })
  }


  onFetchPosts(){
    // this.isFetching=true;
    return this.http.get<{[key:string]: loginModel}>('https://first-86fdf.firebaseio.com/posts.json')
    .pipe(map(responseData =>{
      const res :loginModel[]= [];
      for(const key in responseData){
        if(responseData.hasOwnProperty(key)){
          res.push({...responseData[key]});
        }       
      }
      return res;
    }),
    catchError(errRes =>{
      return throwError(errRes);
    }))
  }

  deletePost(id){
    return this.http.delete('https://first-86fdf.firebaseio.com/posts.json', id).subscribe(id =>{
      console.log(id);
    })
  }

  clearPost(data){
    debugger
    return this.http.delete('https://first-86fdf.firebaseio.com/posts.json',{
      observe :"events"
    }).pipe(tap (event=>{
      console.log(event);
     } )
    )
  }

  logout(){
    localStorage.removeItem('currentUser');
  }
}
