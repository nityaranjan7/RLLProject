import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {

  constructor() { }

  show()
  {
    alert("angular basics")
  }
  trainer()
  {
    alert("prassanna sir is our trainer")
  }
  ngOnInit(): void {
  }

}
