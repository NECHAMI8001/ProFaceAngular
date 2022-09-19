import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from '../grade.service';
import { Grade } from '../Models/Grade.model';

import { FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  codeGradeFormControl = new FormControl('', [Validators.required, Validators.maxLength(6),Validators.pattern("^[0-9]*$")])
  passwordFormControl= new FormControl('', [Validators.required, Validators.maxLength(10),Validators.pattern("^[0-9]*$")])
  NameGradeFormControl= new FormControl('', [Validators.required, Validators.maxLength(3),Validators.pattern((/^[a-zA-Z0-9_ -]+$/) )])
  //(/^[a-zA-Z0-9_ -]+$/)            /^[a-z\u0590-\u05fe]+$/i

  //('', [Validators.required]);

//'', [Validators.required, Validators.minLength(4)]
matcher = new MyErrorStateMatcher();


formData!:FormGroup;
myName!:FormControl;
  Grade_Code!: number
  Grade_Password!:number
  Grade_Name!:string
  show=true;
  show1=true;
  hide=true;
  newGrade:Grade=new Grade();
  confirmPass:number=this.newGrade.Grade_Password;
  constructor(private g:GradeService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  // AddUser()
  // {
  //   this.userService.addUser(this.user).subscribe();
  //   alert("הפעולה הסתיימה בהצלחה");
  // }

  // SignUp1()
  // {
  //   this.g.SignUp(this.newGrade).subscribe();
  //   alert("הפעולה הסתיימה בהצלחה");
  // }

  SignUp1(){
    //console.log(this.newGrade.Grade_Code,this.newGrade.Grade_Name,this.newGrade.Grade_Password);
    this.g.SignUp(this.newGrade).subscribe(grade_Code=>{
     this.newGrade.Grade_Code;

     if(grade_Code!=0)
      {
       // alert('פעולת ההרשמה נכשלה ');
       alert('הרשמתך בוצעה בהצלחה!');
       this.router.navigate(['menu']);
        // alert("בחר קוד כיתה אחר קוד זה כבר קיים במערכת")
        // sessionStorage.setItem('grade_Code',grade_Code.toString())
        // this.router.navigate(['/Grade']);
      }
     else
    //  alert('הרשמתך בוצעה בהצלחה!');
    //  this.router.navigate(['menu']);
    alert("בחר קוד כיתה אחר קוד זה כבר קיים במערכת");

     });
    }


    // insertStudent()
    // {

    //   this.s.insertStudent(this.student).subscribe(n=>
    //     {
    //       if(n!="")
    //          alert('נשמר בהצלחה');
    //       else

    //        alert('פעולת ההוספה לא הצליחה');
    //     }

    //     );

    // }

    OK1()
    {
      this.g.SignUp(this.newGrade).subscribe(n=>
        {
          if(n==0)
          alert('פעולת ההרשמה נכשלה ');

          else

          alert('נשמר בהצלחה');
        }

        );

    }



    checkPasswords(group: FormGroup) { // here we have the 'passwords' group
      let pass = group.get('Grade_Password');
      let confirmPass = group.get('confirmPass');

      return pass === confirmPass ? null : { notSame: true }
    }



}
