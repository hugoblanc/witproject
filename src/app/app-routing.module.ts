import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectListComponent } from './pages/project-list/project-list.component';


const routes: Routes = [
  {path:'', component: ProjectListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
