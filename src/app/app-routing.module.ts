import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SigninComponent } from './auth/signin/signin.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ClientWorkComponent } from './client-work/client-work.component'; 
import { AboutComponent } from './about/about.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';


const routes: Routes = [
  { path: '' , redirectTo: '/home' , pathMatch : 'full'},
  { path: 'home', component: HomeComponent},
  { path: 'contact', component: ContactComponent },
  { path: 'clientWork', component: ClientWorkComponent},
  { path: 'about', component: AboutComponent },
  { path: 'signin' , component: SigninComponent},
  { path: 'not-found', component: PageNotFoundComponent },
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
