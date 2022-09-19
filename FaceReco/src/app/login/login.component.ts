import { Grade } from './../Models/Grade.model';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from '../grade.service';
import { FormControl, FormGroup } from '@angular/forms';

import { FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  codeGradeFormControl = new FormControl('', [Validators.required, Validators.maxLength(6),Validators.pattern("^[0-9]*$")])
  passwordFormControl= new FormControl('', [Validators.required, Validators.maxLength(10),Validators.pattern("^[0-9]*$")])

  matcher = new MyErrorStateMatcher();


  Grade_Code!: number
  Grade_Password!:number
  Grade_Name!:string
  show=true;
  show1=true;
  hide=true;
  grade: Grade=new Grade
 // is_login!:boolean;

  formData!:FormGroup;
myName!:FormControl;

  constructor(private g:GradeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(){
    //alert('comp login')
   // this.is_login=this.g.islogin;
  }
//frm:any
Login(gradeCode:number,password:number)
{
  //alert('c:'+gradeCode+'p:'+password)
  this.g.Login(gradeCode,password).subscribe(a=>{
    this.grade.Grade_Code && this.Grade_Password
    if(a)
    {
     // alert( 'ברוכים הבאים לכיתה '+ a);
      this.router.navigate(['menu']);
     // this.is_login=true
    }
    else{
      alert('אינך קיים במערכת');
        //this.router.navigate(['sign-up']);
  // this.is_login=false

    }
    this.g.gradeName=a;
   // alert(this.g.islogin)
   // this.g.islogin=true;
   // alert(this.g.islogin)

  }
  )

}
  // Login(Grade_Code:number,Grade_Password:number)
  // {
  //   this.g.Login(Grade_Code,Grade_Password).subscribe(a=>{
  //     this.grade.Grade_Name
  //     if(a)
  //     {
  //       {
  //        // this.show=false;
  //          this.router.navigate(['menu']);
  //        //  {relativeTo:this.route}

  //       }
  //     }
  //     else{
  //       alert('אין שם כיתה')
  //     }
  //   }

  //   )
  //     // {this.show=false;
  //     //    this.router.navigate(['menu'],{relativeTo:this.route});}
  // }




  // this.userService.Login(this.userId,this.userPassword).subscribe(a=>{
  //   this.userType=a;
  //   if(this.userType!='')
  //   {
  //     if(this.userType=="volunteer") {this.show=false; this.router.navigate(['volunteerarea',this.userId],{relativeTo:this.route});}
  //     else{
  //     if(this.userType=="manager"){this.show=false;this.router.navigate(['orgmanagerarea',this.userId],{relativeTo:this.route})}
  //     else {this.show=false;this.router.navigate(['needyarea',this.userId],{relativeTo:this.route});}}
  //   }
  //  else
  //  {
  //    alert("פרטים שגוים");
  //  }});
  // toSignUp()
  // {
  //   this.router.navigate(['sign-up'])
  // }
// Login(){
//   this.g.Login(this.Grade_Code,this.Grade_Password).subscribe(a=>{
//     this.grade.Grade_Code=a;
//     if(this.grade.Grade_Code!='')
//     {
//       if(this.userType=="volunteer") {this.show=false; this.router.navigate(['volunteerarea',this.userId],{relativeTo:this.route});}
//       else{
//       if(this.userType=="manager"){this.show=false;this.router.navigate(['orgmanagerarea',this.userId],{relativeTo:this.route})}
//       else {this.show=false;this.router.navigate(['needyarea',this.userId],{relativeTo:this.route});}}
//     }
//    else
//    {
//      alert("פרטים שגוים");
//    }});

//
}
