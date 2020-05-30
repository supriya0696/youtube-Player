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
import { MovieStateService } from './model/movie-state.service';
import { YoutubeApiService } from './services/youtube-api.service';
// import { Store } from '@ngrx/store';
import { NgxsModule } from '@ngxs/store';
import {MovieState} from 'src/app/model/movie.state'
import { environment } from 'src/environments/environment.prod';
import { SearchComponent } from './youtube/search/search.component';
import { SearchPipe } from './youtube/search.pipe';
import { FormsModule } from '@angular/forms';
import { SearchListingPageComponent } from './youtube/search-listing-page/search-listing-page.component';
import { NavigationMenuComponent } from './youtube/navigation-menu/navigation-menu.component';
import { YoutubePlayerComponent } from './youtube/youtube-player/youtube-player.component';

@NgModule({
  declarations: [
    AppComponent,
    // LoginComponentComponent,
    YoutubeComponent,
    SafePipe,
    CommentSectionComponent,
    SelfCommentComponent,
    SearchComponent,
    SearchPipe,
    SearchListingPageComponent,
    NavigationMenuComponent,
    YoutubePlayerComponent,
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    FormsModule,
    // Store,
    NgxsModule.forRoot([MovieState],{
      developmentMode: !environment.production 
    }),
  ],
  providers: [ MovieStateService,YoutubeApiService,SearchPipe

    // { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
