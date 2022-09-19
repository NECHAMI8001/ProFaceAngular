import { Injectable } from '@angular/core';


import { Observable, observable } from 'rxjs';
import {HttpClient} from '@angular/common/http';
//import { Student } from './Models/Student.model';
import { Presence } from './Models/Presence.model';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
  url='https://localhost:44322/api/presence';
  constructor(private http:HttpClient) { }

  GetAllPresence ():Observable<Presence []>
  {
    return this.http.get<Presence []>(`${this.url}/GetAllPresence`);
  }

}
