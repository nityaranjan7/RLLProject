import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-search-user',
  templateUrl: './search-user.component.html',
  styleUrls: ['./search-user.component.css']
})
export class SearchUserComponent implements OnInit {


id:number;
user:Observable<User>;

  constructor(private _userservice : UserService) { }

  search()
  {
    this.user=this._userservice.searchUser(this.id);
  }

  ngOnInit(): void {
  }

}
