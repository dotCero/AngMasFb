import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {People} from '../../model/people';
import {PeopleService} from '../../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {
  private peopleForm: FormGroup;

  constructor(private peopleService: PeopleService) {
    this.peopleForm = new FormGroup({
      name: new FormControl(),
      lastname1: new FormControl(),
      lastname2: new FormControl(),
      photo: new FormControl(),
      position: new FormControl()
    });
  }

  ngOnInit() {
  }

  onSubmit() {
    const people = new People();
    people.name = this.peopleForm.value.name;
    people.lastname1 = this.peopleForm.value.lastname1;
    people.lastname2 = this.peopleForm.value.lastname2;
    people.position = this.peopleForm.value.position;
    people.photo = this.peopleForm.value.photo;
    this.peopleService.addPeople(people);

    this.peopleForm.reset();
  }

}
