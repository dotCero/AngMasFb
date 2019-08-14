import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { Test1Component } from './test1/test1.component';

import { AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule} from '@angular/fire/database';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    Test1Component,

  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
    /*=========================MATERIALIZE====================*/
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
