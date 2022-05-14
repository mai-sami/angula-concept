import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { VideosComponent } from './videos/videos.component';
import { InterpolationComponent } from './interpolation/interpolation.component';
import { PropaertBindingComponent } from './propaert-binding/propaert-binding.component';
import { StyleBindingComponent } from './style-binding/style-binding.component';
import { EventBindingComponent } from './event-binding/event-binding.component';
import { TempletRefrenceComponent } from './templet-refrence/templet-refrence.component';
import { ToeWayBindingComponent } from './toe-way-binding/toe-way-binding.component';
import { FormsModule } from '@angular/forms';
import { StructuerDirectiveComponent } from './structuer-directive/structuer-directive.component';
import { SwitchDirectiveComponent } from './switch-directive/switch-directive.component';
import { NgforhDirectiveComponent } from './ngforh-directive/ngforh-directive.component';
import { PipesComponent } from './pipes/pipes.component';
import { SquarePipe } from './square.pipe';
import { PerentComponent } from './component interaction/perent/perent.component';
import { ChildComponent } from './component interaction/child/child.component';
import { EmployeeDetailsComponent } from './Services/employee-details/employee-details.component';
import { EmployeeListComponent } from './Services/employee-list/employee-list.component';
import { HttpClientModule } from '@angular/common/http';
import { NotFoundComponent } from './not-found/not-found.component';
import { DepartmentsComponent } from './departments/departments.component';
import { DepartmentsDetailsComponent } from './departments-details/departments-details.component';
import { OverViewComponent } from './over-view/over-view.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  declarations: [
    AppComponent,
    VideosComponent,
    InterpolationComponent,
    PropaertBindingComponent,
    StyleBindingComponent,
    EventBindingComponent,
    TempletRefrenceComponent,
    ToeWayBindingComponent,
    StructuerDirectiveComponent,
    SwitchDirectiveComponent,
    NgforhDirectiveComponent,
    PipesComponent,
    SquarePipe,
    PerentComponent,
    ChildComponent,
    EmployeeDetailsComponent,
    EmployeeListComponent,
    NotFoundComponent,
    DepartmentsComponent,
    DepartmentsDetailsComponent,
    OverViewComponent,
    ContactComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
