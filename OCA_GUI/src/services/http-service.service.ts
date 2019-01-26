import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Note, Folder, Category } from '../models/models.interface';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const baseUrl = 'http://localhost:8080/category/';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) {}

  //GET

  getAllCategories(): Observable < Category[] > {
    return this.http.get < Folder[] > (baseUrl, httpOptions)
      .pipe(
        tap(() => console.log('GET: getAllCategories')),
        catchError(this.handleError < any > ('getAllCategories', []))
      );
  }

  getAllFoldersForCategoryId(categoryId): Observable < Folder[] > {
    return this.http.get < Folder[] > (baseUrl + categoryId + '/folder')
      .pipe(
        tap(() => console.log('GET: getAllFoldersForCategoryId: ' + categoryId)),
        catchError(this.handleError < any > ('getAllFoldersForCategoryId: ' + categoryId, []))
      );
  }

  getAllNotesForFolderId(categoryId, folderId): Observable < Note[] > {
    return this.http.get < Folder[] > (baseUrl + categoryId + '/folder/' + folderId + '/note')
      .pipe(
        tap(() => console.log('GET: getAllNotesForFolderId: ' + folderId)),
        catchError(this.handleError < any > ('getAllNotesForFolderId: ' + folderId, []))
      );
  }


  //PUT
  
  updateNoteInFolder(categoryId, folderId, note ): Observable < Folder > {
    return this.http.put < Folder > (baseUrl + categoryId + '/folder/' + folderId + '/note', note, httpOptions)
      .pipe(
        tap(() => console.log('PUT: updateNoteInFolder : ', note)),
        catchError(this.handleError < any > ('updateNoteInFolder', {}))
      );
  }


  // OLD
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
