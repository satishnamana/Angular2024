import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'structure-if';
  isLogin=true;
  user="admin";
  isSignin=true;
  show=false;

  x=3;
 day=0
 items=[2,5,6,4,8,7]
  constructor() {
   enum Days {
    sunday,
    monday,
    tuesday,
    wensday,
    thursday,
    friday,
    saturday
  }
  this.day=Days.friday


  }
   }
