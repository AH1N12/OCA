import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoriesComponent } from '../categories/categories.component';
import { CategoryComponent } from '../category/category.component';

const routes: Routes = [
{ path: 'categories', component: CategoriesComponent },
{ path: 'categories/:id', component: CategoryComponent },
{ path: '', redirectTo: '/categories', pathMatch: 'full' }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
