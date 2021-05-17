import { Component, OnInit } from '@angular/core';
import { Employ } from '../employ';

@Component({
  selector: 'app-employshow',
  templateUrl: './employshow.component.html',
  styleUrls: ['./employshow.component.css']
})
export class EmployshowComponent implements OnInit {

  employs=
  [
    new Employ(1,'Nitya','Java','Developer',46465),
    new Employ(2,'Amrit','Angular','Programmer',94455),
    new Employ(3,'Manas','Java','Programmer',90334),
    new Employ(4,'Priyanka','Angular','Programmer',89044),
    new Employ(5,'Nivetha','Java','Programmer',67755),
    new Employ(6,'Naina','Java','Programmer',90455),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
