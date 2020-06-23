import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GitReposComponent } from './git-repos/git-repos.component';
import { GitRepositoryComponent } from './git-repository/git-repository.component';
import { AboutComponent } from './about/about.component';
import { NotFoundComponent } from './not-found/not-found.component'


const routes: Routes = [
  { path: 'gitrepos', component: GitReposComponent },
  { path: 'gitlist', component: GitRepositoryComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', component: NotFoundComponent },
  { path: ' ', redirectTo: '/gitrepos', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
