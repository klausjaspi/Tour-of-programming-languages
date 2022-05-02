import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProgrammingLanguagesComponent } from './programming-languages/programming-languages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { LanguageDetailsComponent } from './language-details/language-details.component';

const routes: Routes = [
  {path: '', redirectTo:'/dashboard', pathMatch: 'full'},
  {path: 'languages', component: ProgrammingLanguagesComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: 'detail/:id', component: LanguageDetailsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

//Navigating to hero details
