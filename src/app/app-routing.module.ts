import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { WelcomeComponent } from './component/welcome/welcome.component';
import { LogoutComponent } from './component/logout/logout.component';


// const routes: Routes = [
//   {path:'login', component: LoginComponent},

// ];

const routes: Routes = [
	{ path: 'login', component: LoginComponent },
	{ path: 'welcome/:userName', component: WelcomeComponent},
	{ path: '', component: LoginComponent },
	{ path: 'logout', component: LogoutComponent }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
