import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'data-binding2';
  name = 'somthing';
  inp!:string;
  imgUrl =
    'https://lh5.googleusercontent.com/p/AF1QipOlDWtXRetNWqqg93VjYrDghopwEbhdC8h0jsc=w260-h175-n-k-no';
    isMain=true
    isDark=true
    isImg=true
    satish="uppercase"
    myColor='yellow'
    somthing=true
    noColor=''
    myMethod()
    {
      console.log("Hello   ....")
      if(this.isDark) {

      this.isDark = false;
      }
      else{
        
      this.isDark = true;
      }
    }
    inputChange(e:Event) {
     this.inp = (e.target as HTMLInputElement).value;
      console.log(this.inp)
    }
  }
