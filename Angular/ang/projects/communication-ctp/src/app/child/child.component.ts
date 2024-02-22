import { Component,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent {
count = 0;
  @Output() myEvent = new EventEmitter()
incr()
{
  this.count++;
}
  childFun()
  {
    const data = "hello World";
    this.myEvent.emit(data)
  }
}
