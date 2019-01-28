import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../services/data.service';
import { CommunicatorService } from '../services/../services/communicator.service'
import { CommunicatorFolderNotesService } from '../services/communicator-folder-notes.service'
import { Note, Folder } from '../models/models.interface';


@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {

  @Input() note: Note;
  @Input() parentFolderId: Note;
  isActive: boolean = false;
  noteValBeforeUpdate: string;
  subscription: Subscription;
  constructor(private dataService: DataService, private communicatorFolderNotes: CommunicatorFolderNotesService) {}

  ngOnInit() {
    this.noteValBeforeUpdate = this.note.value;
    this.subscription = this.communicatorFolderNotes.noteUnactivePull().subscribe(id => { this.handleDeactivationEvent(id); });
    if(this.note.isNew) this.activateNote(); 
  }

  handleDeactivationEvent(noteId: number) {
    console.log("handleDeactivationEvent CIAGLE DZIALA!!!!")
    // if (this.note.id != noteId) this.deactivate();
  }

  handleKey(event) {
    if (event.keyCode == 13) this.isActive=false;
    else this.note.value = event.target.value;
  }

  activateNote() {
    if (!this.isActive) {
      this.communicatorFolderNotes.noteActivePush(this.note.id);
      this.isActive = true;
    }
  }

  deactivate() { //TODO: metoda jest wywolywana zarownoi przez serwis, enter, jak i blura- nalezy zdecydowac sie na ktores rozwiazanie
    this.isActive = false;
    if (this.note.isNew) this.registerNewNote();
    else this.updateNote()
  }

updateNote() {
  if (this.noteValBeforeUpdate != this.note.value) {
    this.dataService.updateNoteInFolder(this.note, (updatedNote) => { this.note = updatedNote; })
  }
  this.noteValBeforeUpdate = this.note.value;
}

registerNewNote() {
  console.dir(this.note)
  this.communicatorFolderNotes.newNotePush(this.note);
}





//  isActive: boolean = false;
//  @Input() note: Note;
//  @Input() parent: FolderComponent;
//  @Output() active = new EventEmitter < NoteComponent > ()

//  constructor(private folderService: FolderService) {}

//  ngOnInit() {
  //    this.isActive=true;
  //  }
  //  //Aktywuje aktualny i emituje event z samym soba, informujacy ze zostal aktywowany
  //  public handleClick(){
    //    this.isActive = true;
    //    this.active.emit(this);
    //  }

    //  //Dezaktywuje sie
    //  public deactivate(): void{ 
      //    this.isActive = false;
      //  }

      //  handleKey(event): void {
        // if(event.keyCode==13) this.saveNote();
        //    else this.note.value =  event.target.value;
        //  }

        //  saveNote():void{
          //    this.setInputEnabled(false);

          //  }
          //  a():void{}

          //  setInputEnabled(val: boolean):void{
            //    //this.note.active = val;
            //    this.isActive = val;
            //  }
          }
