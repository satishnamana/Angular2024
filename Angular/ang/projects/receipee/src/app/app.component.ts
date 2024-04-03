import { Component } from '@angular/core';
import { ReceipeeDataService } from './receipee-data.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'receipee';
  receipes:any=[];
  searchTerm!:string;
  count:number=0;
  constructor(private rds:ReceipeeDataService)
  {
   this.rds.fetchData().subscribe((data:any)=> {
    console.log(data.recipes);
    this.receipes = data.recipes
    console.log(this.receipes)
   })

    console.log(this.receipes)
  }
  add()
  {
    this.count++;
  }
  search()
  {
    this.rds.searchData(this.searchTerm )
    .subscribe((data)=>this.receipes = data.recipes)

  }
}
