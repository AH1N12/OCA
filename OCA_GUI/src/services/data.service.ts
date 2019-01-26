import { Injectable } from '@angular/core';
import { HttpService } from './http-service.service';
import { Note, Folder, Category } from '../models/models.interface';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  categoryId:number;
  constructor(private httpService: HttpService) {}

  public setCategoryId(categoryId:number){
    this.categoryId=categoryId;
    console.log('HttpService: categoryId set to: ', this.categoryId)
  }

  checkCategoryId(){
    if(!this.categoryId) throw 'HttpService: categoryId must be set';
  }

  //GET

  public getAllCategories(callback) {
    return this.httpService.getAllCategories().subscribe(data => callback(data));
  }

  public getAllFoldersForCurrentCategoryId(callback) {
    this.checkCategoryId();
    return this.httpService.getAllFoldersForCategoryId(this.categoryId).subscribe(data => callback(data));
  }

  public getAllNotesForFolderId(folderId, callback) {
    this.checkCategoryId();
    return this.httpService.getAllNotesForFolderId(this.categoryId, folderId).subscribe(data => callback(data));
  }


  //PUT

  public updateNoteInFolder(note, callback) {
    this.checkCategoryId();
    return this.httpService.updateNoteInFolder(this.categoryId, note.folderId, note).subscribe(data => callback(data));
  }

}
