import { Injectable } from '@angular/core';
import { HttpService } from './http-service.service';
import { Note, Folder } from '../models/models.interface';


//import { PageContentComponent } from '../page-content/page-content.component';


@Injectable({
  providedIn: 'root'
})
export class FolderService {
  
  activeFolder: Folder;
  activeNote: Note;

  public emptyFolder() {
    return {
      id: null,
      name: null,
      notes: []
    }
  }

  public emptyNote(parentFolderId? : number) {
    return {
      id: null,
      tittle: "",
      value: "",
      parentFolderId:parentFolderId
    }
  }

  setActiveFolder(folder): void {
    // this.activeFolder.
  }

  getAllFolders(callback): void {
    this.httpService.getAllFolders().subscribe(obj => callback(obj));
  }

  arrowTest(func): void{ func();}
  

  constructor(private httpService: HttpService) {}
}
