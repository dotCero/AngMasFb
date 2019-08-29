import {Component, OnInit} from '@angular/core';
import {NgForm} from '@angular/forms';
import {People} from '../../model/people';
import {PeopleService} from '../../services/people.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.css']
})
export class PeopleComponent implements OnInit {

  constructor(private peopleService: PeopleService) {
  }

  ngOnInit() {
  }

  onSubmit(peopleForm: NgForm) {
    if (peopleForm.value.key == null) {
      console.log('nuevo');
      peopleForm.value.key = 'key...';
      this.peopleService.addPeople(peopleForm.value);
    } else {
      console.log('edit');
      this.peopleService.updatePeople(peopleForm.value.key, peopleForm.value);
    }
    this.resetForm(peopleForm);
  }

  private resetForm(peopleForm?: NgForm) {
    if (peopleForm != null) {
      peopleForm.reset();
      this.peopleService.selectedPeople = new People();
    }
  }
}
