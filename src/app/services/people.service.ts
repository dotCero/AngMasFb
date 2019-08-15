import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList, AngularFireObject} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {People} from '../model/people';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private resultset: AngularFireObject<People>;
  public obs: Observable<People>;
  private peopless: any;
  public hola: string;

  constructor(database: AngularFireDatabase) {
    this.resultset = database.object('people');

    /*this.obs = this.resultset.snapshotChanges().pipe(
      map(changes =>
        changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
      )
    );*/
    this.obs = this.resultset.valueChanges();
  }

  public getPeoples() {
    /*return this.resultset.valueChanges();*/
    /*this.resultset.snapshotChanges().subscribe(peoples => {
      peoples.forEach(p => {
        console.log(p.type);
        console.log(p.key);
        console.log(p.payload.val());
      });
    });
    return this.peopless;*/
  }

  /*addItem(newName: string) {
    this.resultset.push({lastnames: {one: newName, two: newName}, photo: newName, position: 25, name: newName});
  }
  updateItem(key: string, newText: string) {
    this.resultset.update(key, {lastnames: {one: newText, two: newText}, photo: newText, position: 25, name: newText});
  }
  deleteItem(key: string) {
    this.resultset.remove(key);
  }
  deleteEverything() {
    this.resultset.remove();
  }*/
}
