import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../Models/Student.model';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-delete-student',
  templateUrl: './delete-student.component.html',
  styleUrls: ['./delete-student.component.scss']
})
export class DeleteStudentComponent implements OnInit {
  show=true;
  student: Student=new Student
  Student_ID!: string
  Student_Name!:string
  Student_Image!:string
  Student_Grade_Code!:number
  formData!:FormGroup
  constructor(private s:StudentService, private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  delete1(id:string)
  {
    this.s.Delete(id).subscribe(sID=>{
      this.student.Student_ID
      if(sID==null)
      {
       // alert('האם את/ה בטוח/ה שברצונך למחוק?');
        alert('התלמיד נמחק בהצלחה');
      }
      else
      {
       alert ('פעולת המחיקה נכשלה');
      }
    }
      )
  }
}
