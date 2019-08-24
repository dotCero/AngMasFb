import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { AngularFireModule} from '@angular/fire';
import { environment } from '../environments/environment';
import { AngularFireDatabaseModule} from '@angular/fire/database';

import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { PeopleListComponent } from './content/people-list/people-list.component';
import { PeopleComponent } from './content/people/people.component';
import { TestingComponent } from './content/testing/testing.component';

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    PeopleComponent,
    TestingComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
