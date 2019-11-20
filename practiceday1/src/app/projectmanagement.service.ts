import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../environments/environment';
import { formmodel } from './projectform/formModel.model';
@Injectable({
  providedIn: 'root'
})
export class ProjectmanagementService {

  constructor(private httpclient: HttpClient) { }

  saveProjectinfo(formdata: formmodel): Promise<any> {
    let jsonBody = JSON.stringify(formdata);
    let headers: HttpHeaders = new HttpHeaders();
    headers = headers.append("Content-Type", "application/json")
    return this.httpclient.post(environment.apiURL + "projectinfo", jsonBody
      , { headers })
      .toPromise().then(result => result)
      .catch(err => console.log("Error", err))

  }

  getprojectdetails():Promise<any>{
    return this.httpclient.get(environment.apiURL+"projectinfo").toPromise()
    .then(res=>res)
    .catch(err=>console.log(err))
  }

}
