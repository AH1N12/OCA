import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { FolderComponent } from '../folder/folder.component'

@Injectable({
  providedIn: FolderComponent
})
export class CommunicatorFolderNotesService {

  private subject = new Subject < any > ();

  constructor() {}

  public noteActivePull() {
    return this.subject.asObservable();
  }

  public noteActivePush(noteId: number) {
    this.subject.next(noteId);
  }

  public noteUnactivePull() {
    return this.subject.asObservable();
  }

  public noteUnactivePush(noteId: number) {
    this.subject.next(noteId);
  }



}
