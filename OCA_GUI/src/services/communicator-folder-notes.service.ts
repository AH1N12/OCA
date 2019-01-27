import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Note } from '../models/models.interface';
import { FolderComponent } from '../folder/folder.component'

@Injectable({
  providedIn: FolderComponent
})
export class CommunicatorFolderNotesService { 

  private subject1 = new Subject < any > ();
  private subject2 = new Subject < any > ();
  private subject3 = new Subject < any > ();

  constructor() {}

  public noteActivePull() {
    return this.subject1.asObservable();
  }

  public noteActivePush(noteId: number) {
    this.subject1.next(noteId);
  }

  public noteUnactivePull() {
    return this.subject2.asObservable();
  }

  public noteUnactivePush(noteId: number) {
    this.subject2.next(noteId);
  }

  public newNotePull() {
    return this.subject3.asObservable();
  }

  public newNotePush(note: Note) {
    this.subject3.next(note);
  }





}
