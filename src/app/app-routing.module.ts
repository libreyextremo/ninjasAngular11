import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { DirectoryComponent } from './directory/directory.component';
import { NinjalistComponent } from './ninjalist/ninjalist.component';
import { HttpserviceComponent } from './httpservice/httpservice.component';
import { LanguagesComponent } from './languages/languages.component';

const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'home' , component: HomeComponent},
  {path: 'directory' , component: DirectoryComponent},
  {path: 'directory/:ninja' , component: DirectoryComponent},
  {path: 'ninjalist' , component: NinjalistComponent},
  {path: 'httpservice' , component: HttpserviceComponent},
  {path: 'languages' , component: LanguagesComponent},
  {path: '**' , component: HomeComponent}
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
