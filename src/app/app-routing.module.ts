import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PackageComponent } from './package/package.component';
import { AboutComponent } from './about/about.component';
import { ActiviteComponent } from './activite/activite.component';
import { TeamComponent } from './team/team.component';
import { ContactComponent } from './contact/contact.component';
import { AdherantListComponent } from './adherant-list/adherant-list.component';
import { RegistrationComponent } from './registration/registration.component';
import { AdherantResolver } from './model/adherant-resolver';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactResolver } from './model/contact-resolver';
import { ConnecterComponent } from './connecter/connecter.component';

const routes: Routes = [
   
  {path:'',component:HomeComponent},
  {path:'package',component:PackageComponent},
  {path:'about',component:AboutComponent}, 
  {path:'activite',component:ActiviteComponent},
  {path:'team',component:TeamComponent},
  
  {path:'contact',component:ContactComponent,resolve:{contact:ContactResolver}},
  {path:'contact-list',component:ContactListComponent},

  {path:'adherant-list',component:AdherantListComponent},
  {path:'register',component:RegistrationComponent,resolve:{adherant:AdherantResolver}},
  {path:'connecter',component:ConnecterComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
