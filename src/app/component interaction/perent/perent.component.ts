import { ChildComponent } from './../child/child.component';
 import { Component, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-perent',
  templateUrl: './perent.component.html',
  styleUrls: ['./perent.component.css']
})
export class PerentComponent implements OnInit {
  constructor() {}
fullName:string="Mai Sami"
messgeFromChild:any

  @ViewChild(ChildComponent)  child!: ChildComponent;
  ngOnInit(): void {
    // console.log(this.child.showMassge())
  }
ngAfterViewInit(){
  console.log(this.child.showMassge())

}
}
