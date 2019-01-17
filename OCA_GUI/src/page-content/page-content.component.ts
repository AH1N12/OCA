import { Component, OnInit } from '@angular/core';
import { Note, Folder } from '../models/models.interface';
import { FolderService } from '../services/folder-service.service';
import { FolderComponent } from '../folder/folder.component';

@Component({
  selector: 'page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {

  folders: Folder[] = [];
  activeFolderComponent: FolderComponent = null;

  constructor(private folderService: FolderService) {
  }

  ngOnInit() {
    this.initializeFolders();
  }

  //Dostaje folderComponent z eventu, i jesli to nie jest ten aktywny to dezaktywuje aktualny i ustawia otrzymany jako nowy aktywny
  deactivateOthers(folder: FolderComponent) {
    if(!this.activeFolderComponent) this.activeFolderComponent = folder;
    if (!(this.activeFolderComponent === folder)) {
      this.activeFolderComponent.deactivate();
      this.activeFolderComponent = folder;
    }
  }

  //Pobiera foldery z serwera
  initializeFolders(): void {
    this.folderService.getAllFolders((folders) => {
      this.folders = folders;
      console.dir(this.folders)
    });
  }


  createEmptyFolder(name: string): void {
    let folder = {
      id: null,
      name: name,
      notes: []
    }

    this.folders.push(folder);
    console.dir(this.folders)
  }

}
