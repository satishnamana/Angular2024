import { Component, Input,OnChanges,OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Input() val:any;
constructor()
{
  console.log( "header" )
}
  ngOnChanges()
  {
    console.log( "ngOnChanges Triggered" )
  }
  ngOnInit()
  {
    console.log("ngOnInit Triggered")
  }
  ngDoCheck()
  {
    console.log("ngDoChech Triggered ,class detection will be   done twice")
  }
  ngAfterContentInit()
  {
    console.log("ngContentInit got Triggered")
  }
  ngAfterContentInitChecked()
  {
    console.log( "ngAfterContentInitChecked got Triggered" )

  }
  ngAfterViewInit()
  {
    console.log( "ngAfterInit got Triggered" )
  }
  ngAfterViewChecked ()
  {
    console.log( "ngAfterViewChecked got Triggered" )
  }
  ngOnDistroy()
  {
    console.log( "ngOnDistroy got Triggered" )
  }
}
