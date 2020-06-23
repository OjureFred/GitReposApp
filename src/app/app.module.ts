import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GitReposComponent } from './git-repos/git-repos.component';
import { AboutComponent } from './about/about.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SearchUserComponent } from './search-user/search-user.component';
import { GitRepositoryComponent } from './git-repository/git-repository.component';
import { NumCountPipe } from './num-count.pipe';
import { RedColDirective } from './red-col.directive';

@NgModule({
  declarations: [
    AppComponent,
    GitReposComponent,
    AboutComponent,
    NavbarComponent,
    NotFoundComponent,
    SearchUserComponent,
    GitRepositoryComponent,
    NumCountPipe,
    RedColDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
