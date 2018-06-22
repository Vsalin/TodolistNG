import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { CreateListComponent } from './create-list/create-list.component';
import { ShowListComponent } from './show-list/show-list.component';
import { UpdateListComponent } from './update-list/update-list.component';

const routes: Routes = [
  {
    path: '',
    component: CreateListComponent
  },
  {
    path: 'getList',
    component: ShowListComponent
  },
  {
    path: 'upDateList/:id',
    component: UpdateListComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    [RouterModule.forRoot(routes)]
  ],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule { }
