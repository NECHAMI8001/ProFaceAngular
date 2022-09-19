import { Component } from '@angular/core';
import { GradeService } from './grade.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'FaceReco';
  is_login!:boolean;
  constructor(private g:GradeService){

  }
  ngOnInit() {

    this.is_login=this.g.islogin;
    //alert('app'+this.g.islogin)
  }
  // //title = 'angular-text-search-highlight';
  // searchText = '';
  // characters = [
  //   'Ant-Man',
  //   'Aquaman',
  //   'Asterix',
  //   'The Atom',
  //   'The Avengers',
  //   'Batgirl',
  //   'Batman',
  //   'Batwoman',

  // ]

}
