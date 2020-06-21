import { Injectable } from '@angular/core';
import { User } from '../user';
import { Repos } from '../repos';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GitRequestService {
  gitUser: User;
  gitRepos: Repos;

  constructor(private http: HttpClient) {
    this.gitUser = new User("", "", "", "", 0, 0, 0, "", new Date);
    this.gitRepos = new Repos("", "", "", new Date, 0, 0, "");
  }

  getUser(searchName: string) {
    interface Response {
      url: string,
      login: string;
      html_url: string;
      location: string;
      public_repos: number;
      followers: number;
      following: number;
      avatar_url: string;
      created_at: Date;
    }

    return new Promise((resolve, reject) => {
      this.http.get<Response>('https://api.github.com/users/' + searchName + '?access_token=' + environment.apiToken).
        toPromise().then((result) => {
          this.gitUser = result;
          console.log(this.gitUser);
          resolve();
        },
        (error) => {
          console.log(error);
          reject();
        }
      );
    });
  }

  getRepos(searchName) {
    interface Repos {
      name: string;
      html_url: string;
      description: string;
      forks: number;
      watchers_count: number;
      language: string;
      created_at: Date;
    }
    return new Promise((resolve, reject) => {
     this.http.get<Repos>('https://api.github.com/users/' + searchName + "/repos?order=created&sort=asc?access_token=" + environment.apiToken).
        toPromise().then((results) => {
          this.gitRepos = results;
          resolve();
        },
          (error) => {
            console.log(error);
            reject();
          }
        );
    });
  }
}
