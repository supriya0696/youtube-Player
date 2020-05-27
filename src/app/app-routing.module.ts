import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponentComponent } from './login-component/login-component.component';
import { YoutubeComponent } from './youtube/youtube/youtube.component';
import { AppComponent } from './app.component';
import { SearchListingPageComponent } from './youtube/search-listing-page/search-listing-page.component';




const routes: Routes = [
  { path: '', redirectTo: 'employee', pathMatch: 'full' },
  { path: 'searchList', component: SearchListingPageComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
   routes: Routes=[
    

  ]
}
