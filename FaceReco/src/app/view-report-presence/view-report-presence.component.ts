import { BoolPipe } from './../Pipes/bool.pipe';
import { Presence } from './../Models/Presence.model';
import { PresenceService } from './../presence.service';
import { Time } from '@angular/common';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
//import { Presence } from '../Models/Presence.model';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from '../grade.service';
//import { StudentService } from '../student.service';
//import { Student } from '../Models/Student.model';

import { DocumentEditorComponent, PrintService} from '@syncfusion/ej2-angular-documenteditor';
import { StudentService } from '../student.service';
import { ElementSchemaRegistry } from '@angular/compiler';


@Component({
  selector: 'app-view-report-presence',
  templateUrl: './view-report-presence.component.html',
  styleUrls: ['./view-report-presence.component.scss']



})
export class ViewReportPresenceComponent implements OnInit {

  presence: Presence =new Presence()
  show=true;
  pr:Presence[]=[];

  Presence_Code!: number
  Presence_Lesson_Name!:string
  Presence_Student_ID!:string
  Presence_Grade_Code!:number
  Presence_Date!:Date
  Presence_TimeBLesson!:boolean
  Presence_TimeMLesson!:boolean
  Presence_TimeELesson!:boolean
  Presence_Hour!:Time
  grade_name!: string;
  //st:Student[]=[];



  constructor(private router:Router,private p:PresenceService,private route:ActivatedRoute,private grade:GradeService,private s:StudentService) {
    this.GetAllPresence()
  }

  ngOnInit(){
    this.grade_name=this.grade.gradeName;

   // this.cheked();

  }
  checkPutV(){

  }
  printPage(){
    window.print();
  }
  // GetAllPresence(){
  //   this.s.GetAllStudent().subscribe(p1=>{
  //     this.st=p1
  //   })
  //   // this.p.GetAllPresence().subscribe(a=>{
  //   //   this.pr=a
  //   //   if(a==null){
  //   //     alert('קוד נוכחות זה אינו קיים במערכת')
  //   //   }
  //   //   else{
  //   //     console.log(this.pr)
  //   //   }

  //   // })
  //   }
  GetAllPresence(){
    this.p.GetAllPresence().subscribe(a=>{
      this.pr=a
      if(a==null){
        alert('תלמיד זה אינו קיים במערכת')
      }
      else{
        console.log(this.pr)
      }

    })
    }

// cheked(){
//   this.s.Check().subscribe(
//     //a=>{
//     // if(a==true)
//     // return BoolPipe.name
//     // else
//     // return false


//  // }
//   )
// }
  //   delete1(id:string)
  // {
  //   this.s.Check().subscribe(sID=>{
  //     this.student.Student_ID
  //     if(sID==null)
  //     {
  //      // alert('האם את/ה בטוח/ה שברצונך למחוק?');
  //       alert('התלמיד נמחק בהצלחה');
  //     }
  //     else
  //     {
  //      alert ('פעולת המחיקה נכשלה');
  //     }
  //   }
  //     )
  // }
}
