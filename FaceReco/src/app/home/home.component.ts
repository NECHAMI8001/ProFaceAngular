import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { GradeService } from '../grade.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  show=true;
 // is_login!:boolean;


  constructor(private router:Router,private route:ActivatedRoute,private g:GradeService) { }

  ngOnInit() {
   // this.is_login=this.g.islogin;

  }
  ToSignUp()
  {
    this.router.navigate(['sign-up']);

  }
  ToLogin()
  {
  //  alert(this.is_login)
    this.router.navigate(['login']);
  }
}
