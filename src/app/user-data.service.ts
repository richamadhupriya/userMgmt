import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserDataService {
  user: any;
  userData:any;
  constructor(private http: HttpClient) { }
  getData() {
    this.userData = this.http.get('../../assets/user.json').subscribe(data => { this.user = data as string[]; });
    return this.userData;
  }
  postData(name: string, id: string, email: string, mobile: string, location: string): Observable<any> {

    return this.http.post('http://localhost:4210/rest/api/post', {
      name: name,
      id: id,
      email: email,
      mobile: mobile,
      location: location
    })
  }

  updateData(name: string, id: string, email: string, mobile: string, location: string): Observable<any> {

    return this.http.post('http://localhost:4210/rest/api/update', {
      name: name,
      id: id,
      email: email,
      mobile: mobile,
      location: location
    })
  }

  deleteData(index: any): Observable<any> {

    return this.http.post('http://localhost:4210/rest/api/delete', {
      index: index,
    })
  }


}
