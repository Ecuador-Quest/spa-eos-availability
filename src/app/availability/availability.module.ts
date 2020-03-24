import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponent } from './main/main.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {PerfectScrollbarModule} from 'ngx-perfect-scrollbar';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MatSidenavModule,
    PerfectScrollbarModule,
    MatCardModule,

  ]
})
export class AvailabilityModule { }
