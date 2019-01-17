import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note, Folder } from '../models/models.interface';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const baseUrl = 'http://localhost:8080/folder/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  getAllFolders(): Observable < Folder[] > {
    return this.http.get < Folder[] > (baseUrl + 'all')
      .pipe(
        tap(() => console.log('GET: folder/all')),
        catchError(this.handleError < any > ('folder/all', []))
      );
  }

  saveFolder(folder: Folder): Observable < Folder > {
    return this.http.post < Folder > (baseUrl + 'save', folder, httpOptions)
      .pipe(
        tap(() => console.log('POST: folder/save : ', folder)),
        catchError(this.handleError < any > ('folder/save', {}))
      );
  }

  private handleError < T > (operation = 'operation', result ? : T) {
    return (error: any): Observable < T > => {
      console.error(error);
      console.log(`${operation} failed: ${error.message}`);
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
