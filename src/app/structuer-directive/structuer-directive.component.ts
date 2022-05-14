import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-structuer-directive',
  templateUrl: './structuer-directive.component.html',
  styleUrls: ['./structuer-directive.component.css']
})
export class StructuerDirectiveComponent implements OnInit {

  constructor() { }
isActive:boolean=true

isLogin:boolean=false
userName="Ahmed"
  ngOnInit(): void {
  }

}
