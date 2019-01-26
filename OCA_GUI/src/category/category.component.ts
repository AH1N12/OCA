import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { DataService } from '../services/data.service';
import { Note, Folder, Category } from '../models/models.interface';
import { FolderComponent } from '../folder/folder.component'

@Component({
  selector: 'category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css']
})

export class CategoryComponent implements OnInit {

  folders: Folder[] = [];
  categoryId: number;

  constructor(private route: ActivatedRoute, private dataService: DataService) {
    this.route.params.subscribe(params => {
      this.categoryId = params.id;
      this.getAllFolders();
    });
  }


  ngOnInit() {

  }

  getAllFolders() {
    this.dataService.setCategoryId(this.categoryId);
    this.dataService.getAllFoldersForCurrentCategoryId((data) => {
      this.folders = data;
      this.folders.sort((a, b) => a.position - b.position)
    });
  }

}
