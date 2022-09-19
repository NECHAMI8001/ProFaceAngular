import { FilterPipe } from './filter.pipe';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';



// import { FilterPipe } from './app.FilterPipe'; // -> imported filter pipe
import { AppComponent } from './app.component';


import { AppRoutingModule } from './app-routing.module';

import { AddStudentComponent } from './add-student/add-student.component';
import { HttpClientModule } from '@angular/common/http';
import { NewStudentComponent } from './new-student/new-student.component';
import { ViewReportPresenceComponent } from './view-report-presence/view-report-presence.component';
import { Routes, RouterModule,Router } from '@angular/router';
import { LoginComponent } from './login/login.component';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from  '@angular/material/icon';
import { MatChipsModule } from '@angular/material/chips';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './sign-up/sign-up.component';
import { MenuComponent } from './menu/menu.component';
import { CheckPresenceComponent } from './check-presence/check-presence.component';
import { DeleteStudentComponent } from './delete-student/delete-student.component';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './home/home.component';


import { ButtonModule } from '@syncfusion/ej2-angular-buttons';
import { DocumentEditorAllModule } from '@syncfusion/ej2-angular-documenteditor';
import { BoolPipe } from './Pipes/bool.pipe';




const appRoutes:Routes=[
  {path:'add-student',component:AddStudentComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'check-presence',component:CheckPresenceComponent},
  {path:'view-report-presence',component:ViewReportPresenceComponent},
  {path:'new-student',component:NewStudentComponent},
  {path:'delete-student',component:DeleteStudentComponent},
  {path:'sign-up',component:SignUpComponent},
  {path:'login',component:LoginComponent},
  {path:'menu',component:MenuComponent},
  {path:'home',component:HomeComponent}






  ]
@NgModule({
  declarations: [
    AppComponent,
    AddStudentComponent,
    NewStudentComponent,
    ViewReportPresenceComponent,
    LoginComponent,
    SignUpComponent,
    MenuComponent,
    CheckPresenceComponent,
    DeleteStudentComponent,
    FilterPipe,
    HomeComponent,
    BoolPipe


  ],

  imports: [

    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,
    RouterModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule,
    MatTabsModule,
    MatIconModule,MatChipsModule,MatInputModule,MatFormFieldModule,
    BrowserAnimationsModule,
    MatButtonModule,
    DocumentEditorAllModule,
     ButtonModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
