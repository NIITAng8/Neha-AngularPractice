import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProjectformComponent } from './projectform/projectform.component';
import { CreateprojectComponent } from './createproject/createproject.component';


const routes: Routes = [
  {path:'',redirectTo:'createproject',pathMatch:'full'},
  {path:'createproject',component:CreateprojectComponent},
  {path:'projectform/:id',component:ProjectformComponent}, 
  {path:'projectform',component:ProjectformComponent}, 
  {path:'**',component:CreateprojectComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
