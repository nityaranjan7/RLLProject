import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {
name:string;
company:string;
  constructor() {
    this.name="Nitya";
    this.company="Mphasis";
   }

  ngOnInit(): void {
  }

}
