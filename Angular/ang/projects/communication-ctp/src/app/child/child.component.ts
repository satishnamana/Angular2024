import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {

  @Output()myEvent= new EventEmitter();
  data = {
    name:"satish",
    age: 26
  }
  count = 0;
  message!: "I'm, good"
  counter()
  {
      this.count++;
  }
  inp=''
  fun() 
  {
    const message="hello everyone"
    console.log("button clicked")
    this.myEvent.emit(this.inp)
  }
}
