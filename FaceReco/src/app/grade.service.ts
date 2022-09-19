import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Grade } from './Models/Grade.model';







@Injectable({
  providedIn: 'root'
})
export class GradeService {
  url= 'https://localhost:44322/api/grade'
  gradeName!: string;
  gradeCode!:number;
  islogin=false;

  constructor(private http:HttpClient) { }

  public uploadFile (students: File,gradeCode:number): Observable<Object>{
         let formData = new FormData();
         formData.append('students',students);
        // formData.append('GradeCode',gradeCode.toString());
         return this.http.post(`${this.url}/loadDataStudent`,formData);
      }

  Login(gradeCode:number, password:number):Observable<string>
  {
    //alert('c:'+gradeCode+'p:'+password);
   return this.http.get<string>(`${this.url}/Login/${gradeCode}/${password}`)
  }
  SignUp(newGrade:Grade):Observable<null>
  {
  //let  headers=new Headers({'Content-type':'application/json; charset=utf-8'});
  return this.http.post<null>(`${this.url}/signup`,newGrade);
  }


}
