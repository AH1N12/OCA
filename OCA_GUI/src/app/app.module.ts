import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { PageContentComponent }    from '../page-content/page-content.component';
import { FolderComponent } from '../folder/folder.component';
import { NoteComponent } from '../note/note.component';
import { HttpClientModule }    from '@angular/common/http';
import { CategoryComponent } from '../category/category.component';
import { CategoriesComponent } from '../categories/categories.component';
import { AutofocusDirective } from '../directive/autofocus.directive';
import { NavigationComponent } from '../navigation/navigation.component';

@NgModule({
  declarations: [
    AppComponent,
    FolderComponent,
    NoteComponent,
    // PageContentComponent,
    CategoryComponent,
    CategoriesComponent,
    AutofocusDirective,
    NavigationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
