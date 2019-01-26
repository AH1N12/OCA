import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';
import { Note, Folder, Category } from '../models/models.interface';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  categories: Category[];
  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAllCategories((data) => { this.categories = data });
  }
  

}
