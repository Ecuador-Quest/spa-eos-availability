import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { APP_BASE_HREF } from '@angular/common';
import {MainComponent} from './availability/main/main.component';


const routes: Routes = [{
  path: 'availability',
  // canActivate: [AuthGuard],
  children: [
    {
      path: '',
      component: MainComponent

    }
  ]
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
