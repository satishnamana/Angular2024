import { Component } from '@angular/core';
interface Item{
    id: number,
    name:string}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  m =true;
  g = true;
  x= 'red';
  y= 'blue';
  title = 'structure-for';
  item = [2, 5, 8, 1, 7, 6, 4, 58, 6, 7, 3, 1];

  obj = {
    name: 'satish',
    age: 26,
    salary: 45000,
  };
  items: Item[] = [
    { id: 1, name: 'item 1' },
    { id: 2, name: 'item 2' },
    { id: 3, name: 'item 3' },
    { id: 4, name: 'item 3' },
  ];
  fun(index: number, item: Item): number {
    return item.id;
  }
}
