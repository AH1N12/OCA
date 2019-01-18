import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Note, Folder } from '../models/models.interface';
import { FolderService} from '../services/folder-service.service';
import { FolderComponent} from '../folder/folder.component';


@Component({
  selector: 'note-component',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css']
})
export class NoteComponent implements OnInit {
  isActive: boolean = false;
  @Input() note: Note;
  @Input() parent: FolderComponent;
  @Output() active = new EventEmitter < NoteComponent > ()
  
  constructor(private folderService: FolderService) {}

  ngOnInit() {
    this.isActive=true;
  }
  //Aktywuje aktualny i emituje event z samym soba, informujacy ze zostal aktywowany
  public handleClick(){
    this.isActive = true;
    this.active.emit(this);
  }

  //Dezaktywuje sie
  public deactivate(): void{ 
    this.isActive = false;
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
  	this.isActive = val;
  }
}
