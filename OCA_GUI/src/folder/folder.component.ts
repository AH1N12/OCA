import { Component, OnInit, Input } from '@angular/core';
import { FolderService } from '../services/folder-service.service';
import { Note, Folder } from '../models/models.interface';

@Component({
  selector: 'folder-component',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {
  
  folderNameInputEnabled: boolean = false;
  newFolder: Folder;
  active:boolean = false;

  @Input() folder: Folder
  constructor(private folderService: FolderService) {

  }

  ngOnInit() {
    //this.folder.notes.push({tittle:"pushed", value:"val", id:null, parentFolderId:this.folder.id})

  }

  // activate():void{
  // this.

  // }
  // save(): void {
  //   this.folderService.saveFolder(this.folder)
  //     .subscribe(obj => console.dir(obj));
  // }

  addNewFolderBelowClick() {
    this.newFolder = this.folderService.emptyFolder();
    this.folderNameInputEnabled = true;
  }
  a(){}

  hide(){this.folderNameInputEnabled = false;}

  handleKey(event){
    if(event.keyCode==13) this.createFolder();
    else this.newFolder.name = event.target.value;
  }

  createFolder(){
    this.folderNameInputEnabled = false;

  }

  public setActive(val: boolean){
    this.active= val;
  }

}
