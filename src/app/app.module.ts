import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {EosClientInterceptor} from './shared/service/eos-client.interceptor';
import {AvailabilityModule} from './availability/availability.module';
import {StoreModule} from '@ngrx/store';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    AvailabilityModule,
  ],
  providers: [{
    provide: HTTP_INTERCEPTORS,
    useClass: EosClientInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
