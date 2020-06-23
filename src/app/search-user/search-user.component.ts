import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {
  username: string;
  @Output () getOutUser = new EventEmitter<any>();

  constructor() { }

  getUser() {
    this.getOutUser.emit(this.username);
  }

  ngOnInit(): void {
  }

}
