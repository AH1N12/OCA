import { Component, OnInit } from '@angular/core';
import { Note, Folder } from '../models/models.interface';
import { FolderService } from '../services/folder-service.service';

@Component({
  selector: 'page-content',
  templateUrl: './page-content.component.html',
  styleUrls: ['./page-content.component.css']
})
export class PageContentComponent implements OnInit {

  folders: Folder[] = [];

  constructor(private folderService: FolderService) {
    //folderService.appComponent = this;
  }
  
  ngOnInit() {
    this.folderService.arrowTest(()=>{console.dir(this.folders)});

    this.initializeFolders();


    //while(true) console.log(this.folders)
  }

  setFolderActive(folder: Folder){
    console.dir('folder',folder);
  }

  initializeFolders() : void {
    this.folderService.getAllFolders((folders)=>{this.folders = folders;console.dir(this.folders)});
  }

 activateFolder(folder):void{
   console.dir(folder);
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
