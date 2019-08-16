import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../../services/people.service';
import {Observable} from 'rxjs';
import {People} from '../../model/people';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  private peopleList: Observable<People[]>;

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.peopleList = this.peopleService.getPeoples();
  }

}
