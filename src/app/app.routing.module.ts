import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AllUsersComponent } from './users/all-users/all-users.component';
import { IndividualUserComponent } from './users/individual-user/individual-user.component';

const routes: Routes = [
  {
    path: "",
    component: AllUsersComponent,
    pathMatch: "full"
  },
  {
    path: "user/:userId",
    component: IndividualUserComponent,
    pathMatch: "full"
  },
  {
    path: "**",
    redirectTo: ""
  },
]

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
})
export class AppRoutingModule {}
