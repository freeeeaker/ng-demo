import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TodoAppComponent } from './todo-app/todo-app.component'
import { PageNotFoundComponent } from './page-not-found/page-not-found.component'
import { HomeComponent } from './home/home.component'
import { CrisisComponent } from "./crisis/crisis.component";
import { CrisisListComponent } from './crisis-list/crisis-list.component'


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'todo', component: TodoAppComponent },
  {
    path: 'crisis',
    component: CrisisComponent,
    children: [
      { path: 'list', component:  CrisisListComponent }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { enableTracing: false, useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
