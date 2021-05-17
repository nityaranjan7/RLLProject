import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  show(){ alert("Welcome to Angular") }
  trainer(){ alert("trainer is Prasanna...") }

  ngOnInit(): void {
    
  }
  

}
