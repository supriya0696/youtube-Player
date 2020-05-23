// import { Component, OnInit, OnDestroy } from '@angular/core';
// import { FormBuilder, FormGroup, Validators, NgForm } from '@angular/forms';
// import { first } from 'rxjs/operators';
// import { ActivatedRoute, Router } from '@angular/router';
// import { AuthenticationService } from 'src/app/services/authentication.service';
// import { HttpClient } from '@angular/common/http';
// import { map } from 'rxjs/operators';
// import { loginModel } from './login-model';
// import { Subscription } from 'rxjs';

// @Component({
//   selector: 'app-login-component',
//   templateUrl: './login-component.component.html',
//   styleUrls: ['./login-component.component.scss']
// })
// export class LoginComponentComponent implements OnInit , OnDestroy {
//   loginForm: FormGroup;
//   isLoginMode:boolean = true;
//   submitted:boolean;
//   loadedPost:loginModel[]=[]
//   isFetching=false;
//   error=null;
//   errorSub : Subscription

//   constructor(
//     private formBuilder : FormBuilder,
//     private route : ActivatedRoute,
//     private authenticationService: AuthenticationService,
//     private router: Router,
//     private http : HttpClient
//   ) { }

//   ngOnInit(): void {
    
//     this.loginForm = this.formBuilder.group({
//       username: ['',Validators.required],
//       password: ['',Validators.required],
//     });

//     this.errorSub=this.authenticationService.error.subscribe(errrorMeassage =>{
//       this.error=errrorMeassage;
//     })

//      this.authenticationService.onFetchPosts().subscribe(fetchData =>{
//       this.isFetching = false;
//       this.loadedPost = fetchData
//    }, error =>{
//      this.isFetching = false;
//      this.error= error.error.error;
//    })
//   }

//   onSwitchMode(){
//     this.isLoginMode=!this.isLoginMode;
//   }

//   onFetchData(){
//     debugger
//     this.isFetching=true;
//     this.authenticationService.onFetchPosts().subscribe(fetchData =>{
//     this.isFetching = false;
//     this.loadedPost = fetchData
//     // return this.loadedPost
//  }, error =>{
//   this.error=error.error.error;  
//  }

//  )
//   }

//   onCreatePost(postData:loginModel) {
//     debugger
//     // const id=1;

//     this.authenticationService.createAndStorePost(postData.id,'','postData')
   
//     // this.authenticationService.createAndStorePost(postData.id,postData.value.username,postData.value.password)
//     this.loginForm.reset();
//   }
  
//   deletePost(id){
//     debugger
//     console.log(id)
//     this.authenticationService.deletePost(id);
//   }

//   onClearPosts() {
     
//      this.authenticationService.clearPost(this.loadedPost.length).subscribe(id=>{
//       console.log("delted")
//       this.loadedPost=null;
//     })
//   }

//   ngOnDestroy(){
//     this.errorSub.unsubscribe();
//   }
// }
