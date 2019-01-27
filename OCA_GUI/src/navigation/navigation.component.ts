import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommunicatorService } from '../services/communicator.service'
import { Subscription } from 'rxjs';

@Component({
  selector: 'navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css']
})
export class NavigationComponent implements OnInit, OnDestroy {

  constructor(private communicatorService: CommunicatorService) { }

  ngOnInit() {
  }

  ngOnDestroy(){
  }

  addNewFolder(){
  	this.communicatorService.newFolderPush();
  }

  addNewNote(){
  	this.communicatorService.emptyNotePush();
  }

}
