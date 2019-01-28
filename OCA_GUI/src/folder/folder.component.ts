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
export class FolderComponent implements OnInit, OnDestroy {

  @Input() folder: Folder;
  //ew jesli zdecyduje sie zeby folder nie zawieral categoryId to przekazac je jako @Input()
  notes: Note[];
  noteActiveSub: Subscription;
  emptyNoteSub: Subscription;
  newNoteSub: Subscription;
  activeNoteId: number = null;
  constructor(private dataService: DataService, private communicatorFolderNotes: CommunicatorFolderNotesService, private communicatorService: CommunicatorService) {

  }


  //TODO: rozpoznawac subskrybcje np po jakims id (serwis zwraca 1 subskrybcje, ale kazda metoda push przekazuje dodatkowo jakis id)
  ngOnInit() {
    this.noteActiveSub = this.communicatorFolderNotes.noteActivePull().subscribe(id => { this.activateNote(id); });
    this.emptyNoteSub = this.communicatorService.emptyNotePull().subscribe(id => { this.createEmptyNote(id); });
    this.newNoteSub = this.communicatorFolderNotes.newNotePull().subscribe(note => { this.registerNewNote(note); });
    //ew zeby zoptymalizowac mozna zwracac notes w getAllFoldersForCategoryId
    this.getAllNotes();
  }


  ngOnDestroy() {
    this.noteActiveSub.unsubscribe();
    this.emptyNoteSub.unsubscribe();
    this.newNoteSub.unsubscribe();
  }

  activateNote(id) {
    if (this.activeNoteId && this.activeNoteId != id) {
      this.communicatorFolderNotes.noteUnactivePush(this.activeNoteId);
      //alert("jestem folder:"+this.folder.id + "aktywowal mnie note "+ this.activeNoteId);
    }
    this.activeNoteId = id;
  }

  createEmptyNote(id) {
    if (id == this.folder.id) {
      this.notes.push(this.newNote());
    }
  }

  setActive() {
    this.communicatorService.setCurrentFolder(this.folder.id);
  }

  getAllNotes() {
    this.dataService.getAllNotesForFolderId(this.folder.id, (data) => {
      this.notes = data;
      //jesli notes tez beda mialy position to przywroc ponizsze
      // this.notes.sort((a,b)=>a.position-b.position)
    });
  }


  registerNewNote(note) {
    alert(note);
    if (note.value.length > 0) {
      this.dataService.createNoteInFolder(note, (data) => {
        //TODO: zdecydowac sie jak mam byc aktywowana i deaktywowana notka- preferowany focus (chyba focus i enter na raz sie aktywuja)
        //TODO: znajdz w tablicy note.inNew=true i podmien ja na zwrocona notatke
        //TODO: rozpoznawac subskrybcje np po jakims id (serwis zwraca 1 subskrybcje, ale kazda metoda push przekazuje dodatkowo jakis id)
        //TODO:  jesli notka null to usuwaj
      })
    }
  }


  newNote(): Note {
    return {
      id: null,
      isNew: true,
      value: "",
      folderId: this.folder.id
    }
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
