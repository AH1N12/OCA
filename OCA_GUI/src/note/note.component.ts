import { Component, OnInit, Input } from '@angular/core';
import { Note, Folder } from '../models/models.interface';
import { FolderService} from '../services/folder-service.service';


@Component({
  selector: 'note-component',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  inputEnabled: boolean = false;
  @Input() note: Note;
  
  constructor(private folderService: FolderService) {}

  ngOnInit() {
    
  }

  handleKey(event): void {
	if(event.keyCode==13) this.saveNote();
    else this.note.value =  event.target.value;
  }

  saveNote():void{
  	this.setInputEnabled(false);

  }
  a():void{}

  setInputEnabled(val: boolean):void{
  	//this.note.active = val;
  	this.inputEnabled = val;
  }
}
