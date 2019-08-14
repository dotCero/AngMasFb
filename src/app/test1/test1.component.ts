import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {AngularFireDatabase, AngularFireList} from '@angular/fire/database';
import {FormControl, FormGroup} from '@angular/forms';
import {PeopleService} from '../services/people.service';
import {People} from '../model/people';

@Component({
    selector: 'app-test1',
    templateUrl: './test1.component.html',
    styleUrls: ['./test1.component.css']
})
export class Test1Component implements OnInit {
    people: Observable<People[]>;
    testForm: FormGroup;
  private p: People;

    constructor(private peopleService: PeopleService) {
        this.testForm = new FormGroup({
            name: new FormControl(),
            one: new FormControl(),
            two: new FormControl(),
            photo: new FormControl(),
            position: new FormControl()
        });
        /*this.bd.push({nombre: 'hola', foto: 'hola.jpg', posicion: 5, apellido: {one: 'holaO', two: 'holaT'}});*/
    }

    onSubmit() {
        /*this.bd.push({
            name: this.testForm.value.name,
            photo: this.testForm.value.photo,
            position: this.testForm.value.position,
            lastnames: {
                one: this.testForm.value.one ,
                two: this.testForm.value.two
            }
        });*/
        /*console.warn(this.testForm);*/
    }

    ngOnInit() {
      console.log(this.peopleService.getPeoples());
    }
}
