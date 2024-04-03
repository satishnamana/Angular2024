import { Component,OnInit } from '@angular/core';
import { FakeProductService } from '../fake-product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  products:any
    constructor(private fs:FakeProductService)
    {

    }
    ngOnInit()
    {
      this.fs.getData().subscribe((data)=>this.products=data.products)
    }
}
