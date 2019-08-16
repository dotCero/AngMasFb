import {Injectable} from '@angular/core';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {Observable} from 'rxjs';
import {People} from '../model/people';
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private resultset: AngularFireList<People>;

  constructor(database: AngularFireDatabase) {
    this.resultset = database.list('people');
  }

  public getPeoples(): Observable<People[]> {
    return this.resultset.valueChanges();
  }

  public addPeople(people: People) {
    this.resultset.push(people).then(t => {
      people.key = t.key;
      this.resultset.update(t.key, people);
    });
  }

  public updatePeople(id: string, people: People) {
    this.resultset.update(id, people);
  }

  public deletePeople(id: string) {
    this.resultset.remove(id);
  }

  public deleteEverything() {
    this.resultset.remove();
  }
}
