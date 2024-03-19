import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'arrayofObject';
  i = true;
  item = [101, 102, 103];
  obj = {
    name: 'string',
    age: 'number',
    empId: 'number',
  };
  ManiData= [];

  employeedata = [
    { name: 'satish', age: 25, empId: 101, email: 'satish@gamil.com' },
    { name: 'Mani', age: 27, empId: 102, email: 'mani@gamil.com' },
    { name: 'prasad', age: 20, empId: 103, email: 'prasad@gamil.com' },
    { name: 'abhi', age: 19, empId: 104, email: 'abhi@gamil.com' },
    { name: 'pandu', age: 18, empId: 105, email: 'pandu@gamil.com' },
  ]

};


 maniData() {

let maniData= employeedata.find((data)=>)
}
function maniData ()
{
  throw new Error( 'Function not implemented.' );
}


