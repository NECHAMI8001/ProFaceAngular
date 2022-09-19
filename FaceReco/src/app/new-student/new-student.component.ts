import { Student } from './../Models/Student.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
//import { StudentService } from '../student.service';


import { FormGroupDirective, NgForm, Validators} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';


export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {
  IDStudentFormControl = new FormControl('', [Validators.required, Validators.maxLength(9),Validators.pattern("^[0-9]*$")])
  NameStudentFormControl=new FormControl('', [Validators.required, Validators.maxLength(20)])
  //  ,Validators.pattern((/^[a-zA-Z0-9_ -]+$/) )]);

 // passwordFormControl= new FormControl('', [Validators.required, Validators.maxLength(10)])
 //NameStudentFormControl= new FormControl('', [Validators.required, Validators.maxLength(20),Validators.pattern((/^[a-zA-Z0-9_ -]+$/) )])
 //pattern((/^[א'-'ת0-9'_ -]+$/) )]);
 matcher = new MyErrorStateMatcher();
 //name!:string;
 valid!:string;
 checkName(){
  for(var i=0;i<this.Student_Name.length;i++){

   if((this.Student_Name.charAt(i)>='א')&&(this.Student_Name.charAt(i)<='ת'))
         this.valid="תקין";
   else
     this.valid="לא תקין"

 }
 }
 url="https://i.pinimg.com/564x/d8/c4/e7/d8c4e7599a3264634c91e14781806cc2.jpg";


  formData!:FormGroup;
myName!:FormControl;

 student: Student=new Student
 Student_ID!: string
 Student_Name!:string
 Student_Image!:string
 Student_Grade_Code!:number
 //formData!:FormGroup
 show=true;


  constructor(private s:StudentService, private router:Router,private route:ActivatedRoute,private fb:FormBuilder) {
      // this.Student_Name=fb.group({
      //   firstColor: new FormControl('',this.checkName())
      // },{updateOn:'blur'});
   }

  ngOnInit() {
    this.formData=new FormGroup({
      // Student_ID: this.Student_ID,
      // Student_Name: this.Student_Name,
      // Student_Image:this.Student_Image
    })

  }

  resetForm()
  {
    this.formData.reset();
  }
  // InsertStudent()
  // {

  //   this.s.InsertStudent(this.student).subscribe(code=>{
  //   this.student.Student_ID;
  //    if(code=="")
  //    {
  //      alert("פעולת ההוספה לא הצליחה");
  //    }
  //    else
  //    {

  //      alert("ברוכים הבאים ");
  //    }

  //   })
  // }

  insertStudent()
  {
//alert(this.student.Student_ID +" "+this.student.Student_Name)
  // if (this.formData.valid)
  // alert(",תקין");
  // else
  // alert("")

    this.s.insertStudent(this.student).subscribe(n=>
      {
        if(n!="")
           alert('נשמר בהצלחה');
        else

         alert('פעולת ההוספה לא הצליחה');
      }

      );

  }


//     (id=>{
//     this.student.Student_ID;
//     alert(id)
//      if(id=="")
//      {
//        alert("פעולת ההוספה לא הצליחה");
//      }
//      else
//      {
//        alert("ברוכים הבאים ");
//      }
// alert('good night')
//     })
//   }



upload(fileInput :any) {

  //debugger
      //console.log(fileInput);
          this.s.uploadFile(fileInput.files[0]).subscribe();
          console.log("התמונות נטענו בהצלחה");
        //  this.students=false;
        }



  // InsertStudent()
  // {
  //   alert('hello')
  //   this.s.InsertStudent(this.student).subscribe(id=>{
  //     this.student.Student_ID
  //     alert(id)
  //     if(id=="")
  //     {
  //      alert('פעולת ההוספה נכשלה')
  //     }
  //     else{
  //       alert('פעולת ההוספה הצליחה')
  //     }
  //   })
  // }
  selectFile(event: any){
    if(event.target.files){
      var reader = new FileReader()
      reader.readAsDataURL(event.target.files[0])
      reader.onload = (event: any)=>{
        this.url = event.target.result
      }
    }
  }
}
