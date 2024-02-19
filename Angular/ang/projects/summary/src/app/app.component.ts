import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'summary';
  name = 'Satish';
  isdisabled = true;
  isCenter = true;
  input = ""
  inner=""
  na=""
  display() 
  {

  }
  inp( e:any) 
  {
    this.input = e.target.value;
  }
  inr(e:any)
  {
    this.inner = e.target.value;
  }
}
