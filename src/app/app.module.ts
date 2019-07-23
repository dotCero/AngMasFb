import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';

import { AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule} from '@angular/fire/database';

import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
