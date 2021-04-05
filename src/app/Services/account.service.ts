import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';

import {Observable, throwError} from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  private apiServer = 'http://localhost:1789';

  constructor(private httpClient: HttpClient) { }


  create(product): Observable<Product> {
    return this.httpClient.post<Product>(this.apiServer + '/accounts/', JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  getById(id): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/products/' + id)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getByPseudoAndPwd(pseudo, mdp): Observable<Product> {
    return this.httpClient.get<Product>(this.apiServer + '/products/' + id + "&" + "")
      .pipe(
        catchError(this.errorHandler)
      );
  }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.apiServer + '/products/')
      .pipe(
        catchError(this.errorHandler)
      );
  }

  update(id, product): Observable<Product> {
    return this.httpClient.put<Product>(this.apiServer + '/products/' + id, JSON.stringify(product), this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }

  delete(id){
    return this.httpClient.delete<Product>(this.apiServer + '/products/' + id, this.httpOptions)
      .pipe(
        catchError(this.errorHandler)
      );
  }
  errorHandler(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }



}
