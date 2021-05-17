import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  username:string;
  password:string;

  constructor(private _router : Router) {
    this.username="";
    this.password="";
   }

   login()
   {
     if(this.username=="nitya" && this.password=="ranjan")
     {
       this._router.navigate(['/menu']);
     }
     else
     {
       alert("Invalid Credential")
     }
   }

  ngOnInit(): void {
  }

}
