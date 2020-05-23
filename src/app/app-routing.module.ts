import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
// import { LoginComponentComponent } from './login-component/login-component.component';
import { YoutubeComponent } from './youtube/youtube/youtube.component';
import { AppComponent } from './app.component';


const routes: Routes = [];

// export const appRoutes: Routes = [
//   { path: '', component: AppComponent, pathMatch: 'full' },
//   { path: 'test', component: YoutubeComponent, pathMatch: 'full' }
// ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
   routes: Routes=[
    

  ]
}
