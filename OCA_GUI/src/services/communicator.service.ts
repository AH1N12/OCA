import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicatorService {

  private subject = new Subject < any > ();

  constructor() {}

  
}