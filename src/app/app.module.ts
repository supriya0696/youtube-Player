import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }    from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { LoginComponentComponent } from './login-component/login-component.component';
import { YoutubeComponent } from 'src/app/youtube/youtube/youtube.component';
import { SafePipe } from './youtube/safe.pipe';
import { NgxSpinnerModule } from "ngx-spinner"; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommentSectionComponent } from './youtube/comment-section/comment-section.component';
import { SelfCommentComponent } from './youtube/self-comment/self-comment.component'; 

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponentComponent,
    YoutubeComponent,
    SafePipe,
    CommentSectionComponent,
    SelfCommentComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule
  ],
  providers: [ 
    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
