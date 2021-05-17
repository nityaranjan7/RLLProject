import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {
firstno:number;
secondno:number;
result:number;

  constructor() {

    this.firstno=0;
    this.secondno=0;
    this.result=0;
   }

   sum()
   {
     this.result=this.firstno+this.secondno;
   }
   sub()
   {
    this.result=this.firstno-this.secondno;
   }
   mult()
   {
    this.result=this.firstno*this.secondno;
   }


  ngOnInit(): void {
  }

}
