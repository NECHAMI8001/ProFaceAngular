import { GradeService } from './../grade.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../Models/Student.model';
import { StudentService } from '../student.service';
//import { StudentService } from '../Services/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.scss']
})
export class AddStudentComponent implements OnInit {
title = 'angular-text-search-highlight';
// searchText = '';
characters:Student[]=[];



// elements: any = [];
// headElements = ['Student_ID', 'Student_Name', 'Student_Image', 'Student_Grade_Code'];
// searchText: string = '';
// previous: string;
// characters =  [
//   'Ant-Man',
//   'Aquaman',
//   'Asterix',
//   'The Atom',
//   'The Avengers',
//   'Batgirl',
//   'Batman',
//   'Batwoman',

// ]
  grade_name!: string;
  Student_ID!: string
  Student_Name!:string
  Student_Image!:string
  Student_Grade_Code!:number
  student: Student =new Student()
  show=true;
  st:Student[]=[];

  constructor(private router:Router,private s:StudentService,private route:ActivatedRoute,private grade:GradeService) {
    this.GetAllStudent()
    // this.previous=


  }
  // @HostListener('input') oninput() {
  //   this.searchItems();

  ngOnInit(){
    this.grade_name=this.grade.gradeName;
  //   for (let i = 1; i <= 10; i++) {
  //     this.elements.push({
  //       id: i.toString(),
  //       first: 'Wpis ' + i,
  //       last: 'Last ' + i,
  //       handle: 'Handle ' + i
  //     });

  // }
  // this.mdbTable.setDataSource(this.elements);
  //   this.previous = this.mdbTable.getDataSource();
}


GetAllStudent(){
  this.s.GetAllStudent().subscribe(a=>{
    this.st=a
    if(a==null){
      alert('תלמיד זה אינו קיים במערכת')
    }
    else{
      console.log(this.st)
    }

  })
  }
  add(){
this.show=false;
    this.router.navigate(['new-student']);
  }
  delete1()
  {

    this.router.navigate(['delete-student']);
  }

  // house(){
  //   this.router.navigate(['home']);
  // }

  // searchItems() {
  //   const prev = this.mdbTable.getDataSource();
  //   if (!this.searchText) {
  //     this.mdbTable.setDataSource(this.previous);
  //     this.elements = this.mdbTable.getDataSource();
  //   }
  //   if (this.searchText) {
  //     this.elements = this.mdbTable.searchLocalDataBy(this.searchText);
  //     this.mdbTable.setDataSource(prev);
  //   }
  // }
}



