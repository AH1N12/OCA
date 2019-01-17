import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FolderService } from '../services/folder-service.service';
import { Note, Folder } from '../models/models.interface';
import { NoteComponent } from '../note/Note.component';

@Component({
  selector: 'folder-component',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css']
})
export class FolderComponent implements OnInit {

  folderNameInputEnabled: boolean = false;
  newFolder: Folder;
  isActive: boolean = false;
  activeNoteComponent: NoteComponent = null;

  @Input() folder: Folder
  @Output() active = new EventEmitter < FolderComponent > ()
  constructor(private folderService: FolderService) {

  }

  ngOnInit() {
    
  }

  deactivateOthers(note: NoteComponent) {
    if(!this.activeNoteComponent) this.activeNoteComponent = note;
    if (!(this.activeNoteComponent === note)) {
      this.activeNoteComponent.deactivate();
      this.activeNoteComponent = note;
    }
  }
  

  addNewFolderBelowClick() {
    this.newFolder = this.folderService.emptyFolder();
    this.folderNameInputEnabled = true;
  }
  a() {}

  hide() { this.folderNameInputEnabled = false; }

  handleKey(event) {
    if (event.keyCode == 13) this.createFolder();
    else this.newFolder.name = event.target.value;
  }

  // createFolder() {
  //   this.folderNameInputEnabled = false;

  // }

  //Aktywuje aktualny i emituje event z samym soba, informujacy ze zostal aktywowany
  public handleClick(){
    this.isActive = true;
    this.active.emit(this);
  }

  //Dezaktywuje aktualny folder, jego notatke i ew input z nazwa nowego folderu
  public deactivate(): void{
    if(this.activeNoteComponent) this.activeNoteComponent.deactivate(); //todo : usprawnic ew usunac active 
    this.isActive = false;

    // ------------------TODO: dezaktywowac notatke jesli klikne gdzie indziej / znajdz dyrektywe na autofovus
  }

}
