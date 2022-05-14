import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-style-binding',
  templateUrl: './style-binding.component.html',
  styleUrls: ['./style-binding.component.css']
})
export class StyleBindingComponent implements OnInit {

  constructor() { }
textColor:string="red"
hasError:boolean=false
mystyle={
  color:this.textColor,
  fontStyle:"italic"
}
  ngOnInit(): void {
  }

}
