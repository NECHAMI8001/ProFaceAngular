import { Injectable } from '@angular/core';
import { Observable, observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Student } from './Models/Student.model';
@Injectable({
  providedIn: 'root'
})
export class StudentService {
url='https://localhost:44322/api/student';
  constructor(private http:HttpClient) { }

  GetAllStudent ():Observable<Student []>
  {
    return this.http.get<Student []>(`${this.url}/GetAllStudent`);
  }

  // InsertStudent(newStudent:Student):Observable<null>
  // {
  //   alert(this.url+'/InsertStudent/'+newStudent)
  // return this.http.post<null>(this.url+'/InsertStudent/',newStudent);
  // }
  // InsertStudent(user:Student):Observable<null>
  // {
  // return this.http.post<null>(this.url+'/InsertStudent/',user);
  // }
  insertStudent(newStudent:Student):Observable<string>
  {
    //alert('user:'+student)

  console.log(this.url)
  return this.http.post<string>(`${this.url}/insertStudent`,newStudent);
  //return this.http.post<string>(this.url+'/insert/',student);
  }
  // SignUp(newVolunteer:Volunteer):Observable<string>
  // {
  //     return this.http.post<string>(`${this.url}/signup`,newVolunteer);
  // }

  Delete(id:string):Observable<string>{
    return this.http.delete<string>(`${this.url}/delete/${id}`);
  }

  // Check():Observable<boolean>
  // {
  //   return this.http.get<boolean>(`${this.url}/check`);
  // }
  public uploadFile (students: File): Observable<Object>{
         let formData = new FormData();
         formData.append('students',students);
        // formData.append('GradeCode',gradeCode.toString());
         return this.http.post(`${this.url}/imageStudent`,formData);
      }




}
