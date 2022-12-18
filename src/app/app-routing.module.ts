import { ContactComponent } from './contact/contact.component';
import { AppareilsComponent } from './appareils/appareils.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthentificationComponent } from './authentification/authentification.component';

const routes: Routes = [
  {path:'',component:AuthentificationComponent,pathMatch:'full'},
  {path:'appareil' ,component:AppareilsComponent},
  {path:'contact',component:ContactComponent},
  {path:'**',redirectTo:'appareil'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
