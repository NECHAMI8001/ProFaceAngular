import { PresenceService } from './../presence.service';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from '../grade.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-check-presence',
  templateUrl: './check-presence.component.html',
  styleUrls: ['./check-presence.component.scss']
})
export class CheckPresenceComponent implements OnInit {
  // @Input() GradeCode:number | undefined
  // @Input() GradeCode:number | undefined
  @Input()
  GradeCode!: number;
  grade_code!:number;

students:boolean=true
  show=true;


  url="https://i.pinimg.com/564x/d8/c4/e7/d8c4e7599a3264634c91e14781806cc2.jpg";
//   selectFile(event: any){
//  if(event.target.files){
//    var reader = new FileReader()
//    reader.readAsDataURL(event.target.files[0])
//    reader.onload = (event: any)=>{
//      this.url = event.target.result
//    }
//  }
//  }


  constructor(private p:PresenceService,private router:Router,private route:ActivatedRoute,private g:GradeService,private s:StudentService) { }

  ngOnInit() {
    this.grade_code=this.g.gradeCode;
  }
  addPicture()
  {

  }
  // upload(fileInput){
  //   this.g

  // }
  //THIS IS
  upload(fileInput :any) {

//debugger
    //console.log(fileInput);
        this.g.uploadFile(fileInput.files[0],this.grade_code).subscribe();
        console.log("התמונות נטענו בהצלחה");
        this.students=false;
      }
  // upload(fileInput) {

  //       this.g.uploadFile(fileInput.files[0],this.electionId).subscribe();
  //       console.log("הבוחרים נטענו בהצלחה")
  //       this.grades=false
  //     }
  view()
  {

    this.router.navigate(['view-report-presence'])
  }
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
