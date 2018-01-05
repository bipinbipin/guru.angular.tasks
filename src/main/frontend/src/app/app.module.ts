import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TasksComponent } from './tasks/tasks.component';
import { TasksAddComponent } from './tasks/tasks-add/tasks-add.component';
import { TasksListComponent } from './tasks/tasks-list/tasks-list.component';
import {HttpModule} from "@angular/http";
import {TaskService} from "./tasks/task.service";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { StepperComponent } from './stepper/stepper.component';
import { NavbarComponent } from './navbar/navbar.component';
import {AppRoutingModule} from "./app-routing.module";
import {HttpClientModule} from "@angular/common/http";


@NgModule({
  declarations: [
    AppComponent,
    TasksComponent,
    TasksAddComponent,
    TasksListComponent,
    StepperComponent,
    NavbarComponent
  ],
  imports: [
      BrowserModule,
      HttpClientModule,
      HttpModule,
      FormsModule,
      ReactiveFormsModule,
      BrowserAnimationsModule,
      MaterialModule,
      AppRoutingModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
