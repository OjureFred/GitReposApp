import { Component, OnInit } from '@angular/core';
import { GitRequestService } from './../git-http/git-request.service';
import { User } from '../user';
import { Repos } from '../repos';


@Component({
  selector: 'app-git-repos',
  templateUrl: './git-repos.component.html',
  styleUrls: ['./git-repos.component.css']
})
export class GitReposComponent implements OnInit {
  user: User;
  repo: Repos;

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
        this.repo = this.repoService.gitRepos;
          console.log (this.repo);
        },
        (error)=>{
          console.log(error);
        }
      );
  }

  ngOnInit(): void {
    this.getTheUser('OjureFred');
  }

}
