import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BackendserviceService {


  constructor(private http: HttpClient,private router:Router) { }
  insertuserdata(data: any) {
    this.http.post("https://localhost:7228/api/User/registration", data).toPromise().then(result => { console.log(result); })
  }
  insertprofiledata(data: any) {
    this.http.post("https://localhost:7228/api/Profile/profile", data).toPromise().then(result => { console.log(result); })
  }
  viewprofiledata(pid: any) {
    return this.http.get<any>("https://localhost:7228/api/Profile/Viewprofile/" + pid)
  }
  updateprofiledata(data: any) {
    this.http.post("https://localhost:7228/api/Profile/updateprofile", data).toPromise().then(result => { console.log(result); })
  
  }
  // getcoursebaseid(courseid: any) {
  //   return this.http.get<any>('https://localhost:7228/api//ViewCourseByid/' + courseid)
  // }
  insertdiarydata(data: any) {
    this.http.post("https://localhost:7228/api/Entry/insEntry", data).toPromise().then(result => {
      //console.log(data);
      console.log(result);
      //alert("Value Inserted Suceesfully !!");
      //this.router.navigate(['/Home/view']); 
    })
  }
  login(loginInfo: Array<string>) {
    return this.http.post("https://localhost:7228/api/User/login", {
      email: loginInfo[0],
      password: loginInfo[1],
    },
      {
        responseType: 'text',
      });
  }
  getdairydata(uid:any) {
    return this.http.get<any>("https://localhost:7228/api/User/viewuserdairy/" + uid)
  }
  diaryview(did:any)
  {
    return this.http.get<any>("https://localhost:7228/api/User/viewdiary/" + did)
  }
  updatediary(did:any)
  {
    this.http.post("https://localhost:7228/api/User/Update",did).toPromise().then(result =>
    { console.log(result);
      alert("Value Update Suceesfully !!"); 
    this.router.navigate(['/userhome/diaryview']);
  })
  }
  // getdairyopen(did:any) {
  //   return this.http.get<any>("https://localhost:7228/api/User/diaryopen/" + did)
  // }
  diaryviewdelete(did:number)
  {
    // this.http.post("https://localhost:7228/api/user/deleteentry",did).toPromise().then(result =>
    //         { console.log(result); alert("Value Deleted Suceesfully !!"); this.router.navigate(['/userhome/diaryview']);})
    
    
    return this.http.delete<any>('https://localhost:7228/api/User/deleteentry/'+did).toPromise().then(result=>
    {console.log(result)
    alert("Value Deleted Sussessfully")
  this.router.navigate(['/userhome/diaryview']);})
  }

}