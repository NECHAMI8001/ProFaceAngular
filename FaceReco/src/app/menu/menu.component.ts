import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from '../grade.service';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  show=true;
  grade_name!: string;
  //is_login=true;

  constructor(private s:StudentService,private router:Router,private route:ActivatedRoute,private grade:GradeService) { }

  ngOnInit() {
    this.grade_name=this.grade.gradeName;
   //this.grade.islogin=true;

  }
  StudentList(){
    this.router.navigate(['add-student']);
  }
  CheckPresence(){
    this.router.navigate(['check-presence']);
  }
  // home(){
  //   this.router.navigate(['/home']);
  // }
}
