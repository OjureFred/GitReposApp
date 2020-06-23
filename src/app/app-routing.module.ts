import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitReposComponent } from './git-repos/git-repos.component';
import { AboutComponent } from './about/about.component';


const routes: Routes = [
  { path: 'gitrepos', component: GitReposComponent },
  { path: 'about', component: AboutComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
