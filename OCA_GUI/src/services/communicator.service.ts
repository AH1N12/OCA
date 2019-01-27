import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  currentFolderId: number;
  private subject = new Subject < any > ();

  constructor() {}

  public setCurrentFolder(id: number) {
    this.currentFolderId = id;
    console.log('CommunicatorService: currentFolderId set to ' + this.currentFolderId);
  }

  public newFolderPull() {
    return this.subject.asObservable();
  }

  public newFolderPush() {
    this.subject.next();
  }

  public emptyNotePull() {
    return this.subject.asObservable();
  }

  public emptyNotePush() {
    this.subject.next(this.currentFolderId);
  }

}
