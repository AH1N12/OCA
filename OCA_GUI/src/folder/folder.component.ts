import { Component, OnInit, OnDestroy, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { CommunicatorService } from '../services/communicator.service'
import { CommunicatorFolderNotesService } from '../services/communicator-folder-notes.service'
import { Note, Folder } from '../models/models.interface';
import { NoteComponent } from '../note/Note.component';

@Component({
  selector: 'folder',
  templateUrl: './folder.component.html',
  styleUrls: ['./folder.component.css'],
  providers: [CommunicatorFolderNotesService]
})
export class FolderComponent implements OnInit {

  @Input() folder: Folder;
  //ew jesli zdecyduje sie zeby folder nie zawieral categoryId to przekazac je jako @Input()
  notes: Note[];
  subscription: Subscription;
  activeNoteId: number = null;
  constructor(private dataService: DataService, private communicatorFolderNotes: CommunicatorFolderNotesService) {

  }

  ngOnInit() {
    this.subscription = this.communicatorFolderNotes.noteActivePull().subscribe(id => { this.activateNote(id); });
    //ew zeby zoptymalizowac mozna zwracac notes w getAllFoldersForCategoryId
    this.getAllNotes();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  activateNote(id) {
    if (this.activeNoteId && this.activeNoteId != id) {
      this.communicatorFolderNotes.noteUnactivePush(this.activeNoteId);
      //alert("jestem folder:"+this.folder.id + "aktywowal mnie note "+ this.activeNoteId);
    }
    this.activeNoteId = id;
  }


  getAllNotes() {
    this.dataService.getAllNotesForFolderId(this.folder.id, (data) => {
      this.notes = data;
      //jesli notes tez beda mialy position to przywroc ponizsze
      // this.notes.sort((a,b)=>a.position-b.position)
    });
  }



  // folderNameInputEnabled: boolean = false;
  // newFolder: Folder;
  // isActive: boolean = false;
  // activeNoteComponent: NoteComponent = null;

  // @Input() folder: Folder
  // @Input() parent: PageContentComponent
  // @Output() active = new EventEmitter < FolderComponent > ()
  // constructor(private folderService: FolderService) {

  // }

  // ngOnInit() {

  // }

  // deactivateOthers(note: NoteComponent) {
  //   if(!this.activeNoteComponent) this.activeNoteComponent = note;
  //   if (!(this.activeNoteComponent === note)) {
  //     this.activeNoteComponent.deactivate();
  //     this.activeNoteComponent = note;
  //   }
  // }


  // addNewFolderBelowClick() {
  //   this.newFolder = this.folderService.emptyFolder();
  //   this.folderNameInputEnabled = true;
  // }
  // a() {}

  // hide() { this.folderNameInputEnabled = false; }

  // handleKey(event) {
  //   if (event.keyCode == 13) this.createFolder();
  //   else this.newFolder.name = event.target.value;
  // }

  // createFolder() {
  //   this.folderNameInputEnabled = false;

  // }

  // //Tworzy notatke, dodaje ja do listy notatek, TODO: zapis do bazy
  // createNote(){
  //   this.folder.notes.push(this.folderService.emptyNote(this.folder.id));
  //   this.activeNoteComponent.deactivate();
  // }

  // //Aktywuje aktualny folder i emituje event z samym soba, informujacy ze zostal aktywowany
  // public handleClick(){
  //   this.isActive = true;
  //   this.active.emit(this);
  // }

  // //Dezaktywuje aktualny folder, jego notatke i ew input z nazwa nowego folderu
  // public deactivate(): void{
  //   if(this.activeNoteComponent) this.activeNoteComponent.deactivate(); //todo : usprawnic ew usunac active 
  //   this.isActive = false;

  //   // ------------------TODO: dezaktywowac notatke jesli klikne gdzie indziej / znajdz dyrektywe na autofocus
  // }

}
