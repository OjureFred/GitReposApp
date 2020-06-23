import { Component, OnInit } from '@angular/core';
import { GitRequestService } from './../git-http/git-request.service';
import { User } from '../user';
import { Repos } from '../repos';

@Component({
  selector: 'app-git-repository',
  templateUrl: './git-repository.component.html',
  styleUrls: ['./git-repository.component.css']
})
export class GitRepositoryComponent implements OnInit {
  user: User;
  repos: Repos;

  constructor(private httpService: GitRequestService, private repoService: GitRequestService) { }

  getTheUser(name: string) {
    this.httpService.getUser(name).then(
      (result) => {
        this.user = this.httpService.gitUser;
        console.log(this.user);
      },
      (error) =>{
        console.log(error);
      }
    );

    this.repoService.getRepos(name).then(
        (results) => {
        this.repos = this.repoService.gitRepos;
          console.log (this.repos);
        },
        (error)=>{
          console.log(error);
        }
      );
  }

  ngOnInit(): void {
    //this.getTheUser('OjureFred');
  }

}