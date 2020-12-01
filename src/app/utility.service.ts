import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { catchError } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class UtilityService {

  constructor(private http: HttpClient,
  ) { }

  postDataToServer(endPoint: string, requestJson: object): Observable<any> {
    requestJson ? Object.assign(httpOptions, { 'body': requestJson }) : '';
    return this.http.post(endPoint, requestJson, httpOptions)
      .pipe(map(this.returnJsonResponse)).pipe(catchError(this.handleErrorObservable))
  }


  putDataToServer(endPoint: string, requestJson: object): Observable<any> {
    return this.http.put(endPoint, requestJson, httpOptions)
      .pipe(map(this.returnJsonResponse)).pipe(catchError(this.handleErrorObservable))
  }


  getDataToServer(endPoint: string): Observable<any> {
    return this.http.get(endPoint)
      .pipe(map(this.returnJsonResponse)).pipe(catchError(this.handleErrorObservable))
  }

  deleteDataFromServer(id: any, requestJson: object): Observable<any> {
    requestJson ? Object.assign(httpOptions, { 'body': requestJson }) : '';
    return this.http.delete(id)
      .pipe(map(this.returnJsonResponse)).pipe(catchError(this.handleErrorObservable));
  }

  returnJsonResponse(res : any){
    return res
  }

  handleErrorObservable(err : any){
    return throwError(err); 
  }
}
