import { Injectable } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import * as Rx from "rxjs/Rx";
import { from, Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TestService {
apiurl="https://jsonplaceholder.typicode.com/users"

  constructor(private http: HttpClient) { }



  showdata() : Observable<any>{
  	return this.http.get(this.apiurl).pipe(
           map((data) => {
             return data;
           }), catchError( error => {
             return throwError( '502 bad gateway!' );
           })
        );
  }

gettoken(){  
   return !!localStorage.getItem("SeesionUser");  
   } 
  
}
