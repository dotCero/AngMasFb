import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {People} from '../model/people';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private resultset: AngularFireList<People>;
  private peopless: [];
  public hola: string;

  constructor(database: AngularFireDatabase) {
    this.resultset = database.list('people');
  }

  public getPeoples() {
    /*return this.resultset.valueChanges();*/
    this.resultset.snapshotChanges().subscribe(peoples => {
      peoples.forEach(p => {
        const people = new People();
        people.name = p.payload.val().name;
        people.photo = p.payload.val().photo;
        people.position = p.payload.val().position;
        this.peopless.push(people);
      });
    });
    return this.peopless;
  }
}
