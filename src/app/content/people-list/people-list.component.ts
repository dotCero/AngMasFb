import { Component, OnInit } from '@angular/core';
import {PeopleService} from '../../services/people.service';
import {Observable} from 'rxjs';
import {People} from '../../model/people';
import * as $ from 'jquery';
import 'datatables.net';
import {AppComponent} from '../../app.component';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})
export class PeopleListComponent implements OnInit {
  // tslint:disable-next-line:variable-name
  public peopleTable: any;
  private peopleList: any[];

  constructor(private root: AppComponent, private peopleService: PeopleService) {
  }

  ngOnInit() {
    this.initDTs();
  }

  private initDTs() {
    this.getDataPeople();
  }

  private getDataPeople() {
    this.peopleService.getPeoples().snapshotChanges().subscribe(data => {
      this.peopleList = [];
      data.forEach(d => {
        const x = d.payload.toJSON();
        if (!x["key"]) x["key"] = "generating Key...";
        this.peopleList.push(x as People);
      });
      this.setDTPeople();
    });
}

  private setDTPeople() {
    const table: any = $('#peopleTable');
    const set: any = {
      paging: true,
      lengthChange: false,
      searching: false,
      ordering: false,
      info: true,
      scrollX: true,
      pageLength: 10,
      language: {
        url: 'assets/datatable.spanish.json'
      },
      data: this.peopleList,
      columns: [
        {
          "data": null,
          "render": function(data) {
            return data.name + " " + data.lastname1 + " " + data.lastname2;
          }
        },
        {
          "data": "photo"
        },
        {
          "data": "position"
        },
        {
          "data": "key"
        }
      ]
    };
    if (!this.peopleTable) {
      this.peopleTable = table.DataTable(set);
    } else {
      this.peopleTable.destroy();
      this.peopleTable = table.DataTable(set);
    }
  }
}
